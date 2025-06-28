import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    }),
  }),
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      thumbnail: z.string(),
      liveUrl: z.string().optional(),
      githubUrl: z.string().optional(),
      featured: z.boolean().default(false),
      technologies: z.array(z.string()),
      images: z
        .array(
          z.object({
            url: z.string(),
            alt: z.string(),
          })
        )
        .optional(),
    }),
  }),
  now: defineCollection({
    schema: z.object({
      title: z.string(),
      lastUpdated: z.string(),
      mood: z.string().optional(),
      intro: z.string(),
      focusAreas: z.array(
        z.object({
          title: z.string(),
          items: z.array(z.string()),
        })
      ),
    }),
  }),
};
