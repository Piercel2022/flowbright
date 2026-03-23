import { defineCollection, z } from 'astro:content';

const templates = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    gumroadUrl: z.string(),
    featured: z.boolean().default(false),
    cover: z.string(),
    tags: z.array(z.string()),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    cover: z.string().optional(),
  }),
});

export const collections = { templates, blog };