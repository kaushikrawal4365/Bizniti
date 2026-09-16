import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  company: z.string().trim().max(120).optional().default(''),
  service: z.string().trim().max(400).optional().default(''),
  services: z.array(z.string()).optional().default([]),
  message: z.string().trim().min(10).max(3000),
  website: z.string().trim().max(160).optional().default(''),
  budget: z.string().trim().max(80).optional().default(''),
  websiteField: z.string().max(1).optional().default(''),
});

export type LeadInput = z.infer<typeof leadSchema>;
