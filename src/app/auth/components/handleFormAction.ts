import { cartApi } from '@/service/cartApi';
import { loginApi } from '@/service/loginApi';
import { logoutApi } from '@/service/logoutApi';
import { signUpApi } from '@/service/signUpApi';

export const handleFormAction = async (
  action: 'login' | 'logout' | 'signUp', // specify allowed actions as 'login' or 'signUp'
  email?: FormDataEntryValue | null,
  password?: FormDataEntryValue | null
) => {
  try {
    if (action === 'logout') {
      return await logoutApi();
    }
    let result;
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    if (action === 'login') {
      result = await loginApi(email, password);
    } else if (action === 'signUp') {
      result = await signUpApi(email, password);
    } else {
      throw new Error('Invalid action');
    }

    return result;
  } catch (error: any) {
    console.error(`Error during ${action}:`, error);
    throw new Error(`Failed to ${action}: ${error.message || 'Unknown error'}`);
  }
};
