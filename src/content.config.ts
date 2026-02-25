import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
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

export const collections = { blog };
