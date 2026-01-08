import { RegistryBreakingChangesCard } from "@/components/registries";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon } from "@/components/ui/input-group";
import { fetchRegistries } from "@/data/registries";
import { Search } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default async function Home() {
  const registries = await fetchRegistries();

  if (!registries?.data?.length) return null;

  return (
    <main className="max-w-10/12 pt-20 mx-auto ">
      {/* <SearchRegistries /> */}
      <div className="grid grid-cols-2 gap-4 pt-4">
        {registries.data.map((registry: any) => (
          <RegistryBreakingChangesCard registry={registry} key={registry.id} />
        ))}
      </div>
    </main>
  );
}

const SearchRegistries = () => {
  return (
    <div className="">
      <Field>
        <InputGroup>
          <Input
            placeholder="Enter registry name or description"
            size="lg"
            className="rounded-lg"
          />
          <InputGroupAddon align="inline-end">
            <HugeiconsIcon icon={Search} />
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </div>
  );
};
