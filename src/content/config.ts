import { defineCollection, z } from 'astro:content';

const valueProps = defineCollection({
  type: 'data',
  schema: z.object({
    icon: z.string(),
    title: z.string(),
    description: z.string(),
    advantage: z.string(),
    order: z.number(),
  }),
});

const buyerPersonas = defineCollection({
  type: 'data',
  schema: z.object({
    icon: z.string(),
    title: z.string(),
    description: z.string(),
    highlight: z.string(),
    order: z.number(),
  }),
});

const sugaringBenefits = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    rating: z.number().min(1).max(5),
    order: z.number(),
  }),
});

export const collections = {
  'value-props': valueProps,
  'buyer-personas': buyerPersonas,
  'sugaring-benefits': sugaringBenefits,
  testimonials,
};
