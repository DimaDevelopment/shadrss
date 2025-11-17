import { RegistriesList } from "@/components/registries-list";
import { collectRssFeed } from "@/lib/data";
import { Rss } from "lucide-react";

export default async function Home() {
  const registries = await collectRssFeed();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-8 px-16 bg-white dark:bg-black sm:items-start">
        <header className="w-full">
          <h1 className="text-xl font-bold leading-tight tracking-tighter flex items-center gap-x-2">
            <Rss />
            ShadRSS
          </h1>
          <p className="mt-2 text-md text-pretty text-muted-foreground">
            A directory of RSS feeds from the ShadCN UI community registries.
          </p>
        </header>
        <RegistriesList registries={registries} />
      </main>
    </div>
  );
}
