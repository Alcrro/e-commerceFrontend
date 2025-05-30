import { registerSchema } from '@/utils/validations/registerSchema';
import { signUpApi } from '../signUpApi';

const registerUserAction = async (formData: FormData) => {
  const rawData: Record<string, string> = {};

  for (const [key, value] of formData.entries()) {
    rawData[key] = typeof value === 'string' ? value.trim() : '';
  }

  // ✅ Validate input using Zod

  const validatedData = registerSchema.safeParse(rawData);

  if (!validatedData.success) {
    // ✅ Extract and format Zod validation errors
    const errorMessages = validatedData.error.format();

    // ✅ Convert errors to a string
    const firstError =
      errorMessages.email?._errors?.join(', ') ||
      errorMessages.password?._errors?.join(', ') ||
      errorMessages.confirmPassword?._errors?.join(', ') ||
      'Invalid input.';

    return { success: false, message: firstError }; // ✅ Make sure error is always a string
  }

  // ✅ Call API with validated data
  const response = await signUpApi(
    validatedData.data.email,
    validatedData.data.password,
    validatedData.data.confirmPassword
  );
  console.log(response);

  return response;
};

export default registerUserAction;
