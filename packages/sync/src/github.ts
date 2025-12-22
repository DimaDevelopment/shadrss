import { gh } from "@shadcnrss/gh";
import { RegistryRepoMetadata, RegistryRepoMetadataSchema } from "./schemas.js";

export const fetchRepoInfo = async (repo?: string) => {
  if (!repo) {
    return null;
  }

  const repourl = URL.canParse(repo) ? new URL(repo) : null;

  if (!repourl) {
    return null;
  }

  const [owner, repoName] = repourl.pathname.split("/").filter(Boolean);

  if (!owner || !repoName) {
    return null;
  }

  const metadata = await fetchRepoMetadata(owner, repoName, repo);

  return metadata;
};

const fetchRepoMetadata = async (
  owner: string,
  repo: string,
  repoUrl: string
): Promise<RegistryRepoMetadata | null> => {
  try {
    const repository = await gh.rest.repos.get({
      owner,
      repo,
    });

    return RegistryRepoMetadataSchema.parseAsync({
      owner,
      repoId: repository.data.id,
      url: repoUrl,
      name: repo,
      stars: repository.data.stargazers_count,
      forks: repository.data.forks_count,
      issues: repository.data.open_issues_count,
      watchers: repository.data.watchers_count,
      openIssues: repository.data.open_issues_count,
      archived: repository.data.archived,

      repoCreatedAt: new Date(repository.data.created_at),
      repoUpdatedAt: new Date(repository.data.updated_at),
      repoPushedAt: repository.data.pushed_at
        ? new Date(repository.data.pushed_at)
        : undefined,

      license: repository.data.license
        ? repository.data.license.spdx_id
        : undefined,
    });
  } catch (error) {
    console.error(
      `Failed to fetch repo metadata for ${owner}/${repo}: ${error}`
    );
    return null;
  }
};
