import { prisma } from "@shadcnrss/db";
import { progress } from "@shadcnrss/tui";

import { RegistryItem, Registry } from "./schemas.js";
import { ensureRegistryFetchable, fetchRegistryItems } from "./api.js";

import registries from "./data/registries.js";
import { fetchRepoInfo } from "./github.js";

const toRegistryItemInsertValues = (item: RegistryItem) => {
  return {
    name: item.name,
    type: item.type,
    title: item.title,
    description: item.description,
    registryDeps: item.registryDependencies?.join(",") ?? "",
    deps: item.dependencies?.join(",") ?? "",
  };
};

const toRegistryInsertValues = (item: Registry) => {
  return {
    name: item.name,
    homepage: item.homepage,
    url: item.url,
    description: item.description,
    repo: item.repo,
  };
};

const onRegistriesFetched = async (registry: Registry) => {
  const result = await prisma.registry.upsert({
    where: { name: registry.name },
    create: toRegistryInsertValues(registry),
    update: toRegistryInsertValues(registry),
  });

  const registryRepo = await fetchRepoInfo(registry.repo);

  if (registryRepo) {
    await prisma.registryRepo.upsert({
      where: { registryId: result.id },
      create: {
        registryId: result.id,
        ...registryRepo,
      },
      update: registryRepo,
    });
  }

  return result;
};

const onRegistryItemsFetched = (registryId: number, items: RegistryItem[]) => {
  if (!items.length) return;

  return Promise.all(
    items.map((item) =>
      prisma.registryItem.upsert({
        where: { registryId_name: { registryId, name: item.name } },
        create: { ...toRegistryItemInsertValues(item), registryId },
        update: toRegistryItemInsertValues(item),
      })
    )
  );
};

const fetchRegistries = async (): Promise<Registry[]> => {
  /**
   * TODO: Replace it to real fetch from https://raw.githubusercontent.com/shadcn-ui/ui/refs/heads/main/apps/v4/registry/directory.json
   * After shadcn/ui merged PR
   * */
  return registries.map((r) => ({ ...r, repo: r.repourl }));
};

const storeInvalidRegistry = (registry: Registry) => {
  return prisma.invalidRegistry.upsert({
    where: { name: registry.name },
    create: toRegistryInsertValues(registry),
    update: toRegistryInsertValues(registry),
  });
};

export async function syncRegistry() {
  const spinner = progress();
  spinner.start("Starting registry sync...");

  const registries = await fetchRegistries();

  for (const registry of registries) {
    if (!(await ensureRegistryFetchable(registry))) {
      spinner.step(`Registry not fetchable: ${registry.name}`);
      await storeInvalidRegistry(registry);
      continue;
    }

    const savedRegistry = await onRegistriesFetched(registry);
    spinner.step(`Fetched registry: ${registry.name}`);

    // const items = await fetchRegistryItems(registry);

    // if (!savedRegistry) continue;

    // onRegistryItemsFetched(savedRegistry.id, items);

    // spinner.step(`Synced ${items.length} items for registry: ${registry.name}`);
  }

  spinner.succeed("Registry sync completed.");

  return true;
}
