'use server';

import { registerSchema } from '@/utils/validations/registerSchema';
import { signUpApi } from '../signUpApi';

const registerUserAction = async (
  prevState: { success: boolean; message: string },
  formData: FormData
) => {
  const email = formData.get('email')?.toString().trim();
  const password = formData.get('password')?.toString().trim();

  // ✅ Validate input using Zod
  const validatedData = registerSchema.safeParse({ email, password });

  if (!validatedData.success) {
    // ✅ Extract and format Zod validation errors
    const errorMessages = validatedData.error.format();

    // ✅ Convert errors to a string
    const firstError =
      errorMessages.email?._errors?.join(', ') ||
      errorMessages.password?._errors?.join(', ') ||
      'Invalid input.';

    return { success: false, message: firstError }; // ✅ Make sure error is always a string
  }

  // ✅ Call API with validated data
  const response = await signUpApi(
    validatedData.data.email,
    validatedData.data.password
  );

  if (!response.success) {
    return { success: response.success, message: response.message };
  }

  return { success: response.success, message: response.message };
};

export default registerUserAction;
