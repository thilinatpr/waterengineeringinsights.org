import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Water Engineering Insights'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    project_name: z.string(),
    location: z.string(),
    engineering_discipline: z.enum([
      'Hydraulic Engineering',
      'Water Resources',
      'Stormwater Management',
      'Wastewater Treatment',
      'Environmental Engineering',
      'Coastal Engineering',
      'Dam Engineering',
      'Flood Control',
      'Irrigation Systems',
      'Water Quality',
    ]),
    client: z.string(),
    date: z.coerce.date(),
    duration: z.string().optional(),
    budget: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  insights,
  'case-studies': caseStudies,
};
