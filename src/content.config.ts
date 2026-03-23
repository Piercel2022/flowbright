import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const templates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/templates' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    price:       z.number(),
    category:    z.string(),
    gumroadUrl:  z.string().url(),
    featured:    z.boolean().default(false),
    cover:       z.string().optional(),
    tags:        z.array(z.string()).default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    tags:        z.array(z.string()).default([]),
    cover:       z.string().optional(),
  }),
});

export const collections = { templates, blog };