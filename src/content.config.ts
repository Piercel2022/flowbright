import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: './src/content/blog' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    tags:        z.array(z.string()).default([]),
    category:    z.string().optional(),
    cover:       z.string().optional(),
  }),
});

const templates = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: './src/content/templates' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    price:       z.number(),
    category:    z.string(),
    gumroadUrl:  z.string(),
    featured:    z.boolean().default(false),
    tags:        z.array(z.string()).default([]),
    cover:       z.string().optional(),
  }),
});

export const collections = { blog, templates };