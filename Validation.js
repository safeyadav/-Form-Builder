import { z } from 'zod';

export const formSchema = z.object({
  fields: z.array(
    z.object({
      label: z.string(),
      type: z.string(),
    })
  ),
});
