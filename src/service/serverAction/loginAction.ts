import { loginSchema } from '@/utils/validations/loginSchema';
import { loginApi } from '../auth/loginApi';
import { getToken } from '../getToken';

const handleLoginAction = async (formData: FormData) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const validate = loginSchema.safeParse({ email, password });

  if (!validate.success) {
    return {
      success: false,
      errors: validate.error.flatten().fieldErrors,
    };
  }

  try {
    const token = await getToken();

    if (token) {
      return {
        success: false,
        message: 'You are already logged in',
      };
    }
    const result = await loginApi(validate.data.email, validate.data.password);

    if (result.success === false) {
      return {
        success: false,
        message: result.message,
      };
    } else {
      return {
        success: true,
        message: result.message,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: 'Login failed due to server error',
    };
  }
};

export default handleLoginAction;
