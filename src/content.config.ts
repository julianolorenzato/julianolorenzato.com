import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file, glob } from "astro/loaders";
const postTags = z.enum([
    "graphics",
    "gpu",
    "compilers",
    "developer-experience",
    "c++",
    "hpc",
    "parallelism",
]);

const blog = defineCollection({
    loader: glob({ pattern: "*.md", base: "src/content/blog" }),
    schema: z.object({
        title: z.string().nonempty(),
        tags: z.string().array().default([]),
        createdAt: z.date().default(new Date()),
        updatedAt: z.date().default(new Date()),
        draft: z.boolean().default(true),
    }),
});

const repos = defineCollection({
    loader: file("src/content/repos.json"),
    schema: z.object({
        name: z.string(),
        description: z.string().nullable(),
        url: z.string(),
        homepage: z.string().nullable(),
        language: z.string().nullable(),
        stars: z.number(),
        topics: z.string().array(),
    }),
});

export const collections = { blog, repos };
