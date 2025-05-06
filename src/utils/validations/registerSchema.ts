import { z } from 'zod';
export const registerSchema = z.object({
  email: z.string().email('Invalid email password'),
  password: z.string().min(8, 'Password must be at least 6 characters'),
});
