# About this codebase

Personal blog/portfolio for Juliano Lorenzato, a software engineer focused on graphics, GPU, and compilers. Built with [Astro](https://astro.build) 7 (no UI framework — `.astro` components only).

## Stack

- **Astro 7** — static site generation, content collections
- **TypeScript** — `astro/tsconfigs/strict`
- **astro-icon** — icon components (SVGs in `src/icons/`)
- **@astrojs/sitemap** — sitemap generation
- `src/utils/github.ts` uses `octokit` to pull repo data for the projects page

## Structure

- `src/pages/` — routes: `index.astro` (home), `projects.astro`, `resume.astro`, `blog/index.astro` (list), `blog/[slug].astro` (post)
- `src/content/blog/` — blog posts as Markdown, validated by the `blog` collection schema in `src/content.config.ts` (title, tags, createdAt/updatedAt, draft)
- `src/layouts/BaseLayout.astro` — shared page shell
- `src/components/` — `header/`, `post/` (post-specific), and shared components (Sidebar, Badge, Canvas, ThemeSwitch, Separator, PageHeader)
- `src/utils/` — `post.ts` (excerpt generation, reading time from raw Markdown), `github.ts` (fetches repo metadata for the projects page), `date.ts`
- `src/styles/theme.css` — theme (supports light/dark via `ThemeSwitch`)
- `src/shaders/` — shader source files (graphics-focused content)

## Path aliases

`@components/*`, `@assets/*`, `@utils/*`, `@layouts/*` map to `src/components|assets|utils|layouts/*` (see `tsconfig.json`). Prefer these over relative imports.

## Practices

- Use **Bun** for everything — installing packages, running scripts, executing files. Never use npm, yarn, or pnpm/node directly (e.g. `bun install` not `npm install`, `bun run dev` not `npm run dev`, `bun x` not `npx`).

## Commands

- `bun run dev` — start dev server
- `bun run build` — production build
- `bun run preview` — preview the production build
- `bun run astro -- <cmd>` — run any Astro CLI command

## Notes

- New blog posts must satisfy the `blog` collection schema in `src/content.config.ts` — draft defaults to `true`, so set `draft: false` to publish. `tags` must come from the enum defined there.
- `src/content/blog/.obsidian/` is Obsidian vault config, not site content — ignore it unless asked to touch Obsidian settings.
