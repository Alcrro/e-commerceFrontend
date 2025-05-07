import { loginSchema } from '@/utils/validations/loginSchema';
import { loginApi } from '../loginApi';

const handleLoginAction = async (prevState: any, formData: FormData) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // ✅ Validate input with Zod
  const result = loginSchema.safeParse({ email, password });
  if (!result.success) {
    // ❌ Return validation errors
    return {
      success: false,
      message: 'Validation failed',
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await loginApi(result.data.email, result.data.password);

    return {
      success: true,
      message: 'Login successful',
      redirect: '/', // ✅ Add redirect path here
    };
  } catch (error) {
    return {
      success: false,
      message: 'Login failed. Please check your credentials.',
      errors: {},
    };
  }
};

export default handleLoginAction;
