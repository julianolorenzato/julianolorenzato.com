import { Octokit } from "octokit";
import path from "node:path";

interface GithubRepo {
  id: string;
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  topics: string[];
}

const GITHUB_USERNAME = "julianolorenzato";

const REPO_NAMES: string[] = [
  "relief.cpp",
  "sylvaine",
  "venus",
  "trendle",
  "eluda",
  "obscura",
];

const OUTPUT_PATH = path.join(
  import.meta.dirname,
  "../src/content/repos.json",
);

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const allRepos = await octokit.paginate(octokit.rest.repos.listForUser, {
  username: GITHUB_USERNAME,
  per_page: 100,
});

const repos: GithubRepo[] = REPO_NAMES.map((name) => {
  const repo = allRepos.find((r) => r.name === name);
  if (!repo) throw new Error(`Repo not found for ${GITHUB_USERNAME}: ${name}`);

  return {
    id: repo.name,
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    homepage: repo.homepage || null,
    language: repo.language ?? null,
    stars: repo.stargazers_count ?? 0,
    topics: repo.topics ?? [],
  };
});

try {
  await Bun.write(OUTPUT_PATH, JSON.stringify(repos, null, 2));
  console.log(
    `Synced ${repos.length} repos to ${
      path.relative(process.cwd(), OUTPUT_PATH)
    }`,
  );
} catch (err) {
  if (err instanceof Error) {
    console.error(`Failed to write ${path}:`, err.message);
  } else {
    console.error("Unkown error:");
  }
}
