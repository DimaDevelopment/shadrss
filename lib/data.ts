import { XMLParser } from "fast-xml-parser";

import { Registry, RssFeed, RssItem } from "@/types";
import { REGISTRIES_URL, RSS_URLS, STILL_UPDATED_DAYS } from "./config";
import { eachDayOfInterval, isWithinInterval, max, sub } from "date-fns";

const findAndFetchRssFeed = async (
  baseUrl: string
): Promise<RssFeed | null> => {
  const parser = new XMLParser();

  for (const rssPath of RSS_URLS) {
    try {
      const testUrl = new URL(rssPath, baseUrl).toString();
      const response = await fetch(testUrl, {
        signal: AbortSignal.timeout(10000),
      });

      if (!response.ok) {
        continue;
      }

      return parser.parse(await response.text()) as RssFeed;
    } catch (error) {
      continue;
    }
  }
  return null;
};

const findLatestRegistryItemUpdated = (
  registryItems?: RssItem[]
): RssItem[] | null => {
  if (!registryItems || registryItems.length === 0) return null;

  return registryItems
    .filter((item) =>
      isWithinInterval(new Date(item.pubDate), {
        start: new Date(),
        end: sub(new Date(), { days: STILL_UPDATED_DAYS }),
      })
    )
    .toSorted(sortRegistryItemsByDate);
};

const findRegistryUpdatedAt = (
  registryItems?: RssItem[] | null
): Date | null => {
  if (!registryItems || registryItems.length === 0) return null;

  return max(registryItems.map((item) => new Date(item.pubDate))) ?? null;
};

const enrichRegistryWithRssData = async (
  registry: Registry
): Promise<Registry> => {
  const baseUrl = registry.homepage || registry.url;

  if (!baseUrl) return registry;

  const rss = await findAndFetchRssFeed(baseUrl);

  if (!rss) return registry;

  const latestItems = findLatestRegistryItemUpdated(rss.rss?.channel?.item);
  const updatedAt = findRegistryUpdatedAt(latestItems);

  return {
    ...registry,
    feed: rss?.rss?.channel,
    latestItems,
    updatedAt,
  };
};

const sortRegistriesByDate = (registries: Registry[]): Registry[] => {
  return [...registries].sort((a, b) => {
    if (!a.updatedAt && !b.updatedAt) return 0;
    if (!a.updatedAt) return 1;
    if (!b.updatedAt) return -1;
    return b.updatedAt.getTime() - a.updatedAt.getTime();
  });
};

const sortRegistryItemsByDate = (a: RssItem, b: RssItem): number => {
  return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
};

export const collectRssFeed = async (): Promise<Registry[]> => {
  const registries = await getRegistries();

  const registriesWithRss = await Promise.all(
    registries.map(enrichRegistryWithRssData)
  );

  return sortRegistriesByDate(registriesWithRss);
};

export const getRegistries = async (): Promise<Registry[]> => {
  return fetch(REGISTRIES_URL).then((res) => res.json());
};
