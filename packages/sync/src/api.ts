import { Registry, RegistryItem, RegistryItemSchema } from "./schemas.js";

export const getRegistryFileUrl = (registry: Registry): string | null => {
  const ensureUrl = registry.url ?? registry.homepage;

  if (!ensureUrl) return null;

  const registryUrl = ensureUrl.replace("{name}", "registry");
  const ensureJsonExt = registryUrl.endsWith(".json")
    ? registryUrl
    : `${registryUrl}.json`;

  return ensureJsonExt;
};

export const ensureRegistryFetchable = async (
  registry: Registry
): Promise<boolean> => {
  const url = getRegistryFileUrl(registry);

  if (!url) return false;

  const response = await fetch(url, {
    method: "HEAD",
  });

  return response.ok;
};

export const fetchRegistryItems = async (
  registry: Registry,
  onError?: (error: unknown) => void
): Promise<RegistryItem[]> => {
  try {
    const url = getRegistryFileUrl(registry);

    if (!url) return [];

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        ContentType: "application/json",
      },
    });

    if (!response.ok) return [];

    const data = await response.json();

    return RegistryItemSchema.array().parseAsync(data.items);
  } catch (e) {
    onError?.(e);
    return [];
  }
};
