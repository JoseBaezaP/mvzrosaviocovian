import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const education = defineCollection({
  loader: glob({ pattern: "**/*.yml", base: "./src/data/education" }),
  schema: ({image}) => z.object({
    title: z.string(),
    year: z.number(),
    school: z.string(),
    image: image(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.yml", base: "./src/data/services" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
    }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { education, services };
