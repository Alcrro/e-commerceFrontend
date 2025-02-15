import { handleFormAction } from './handleFormAction';

export const actionFormHandler = async (
  action: 'login' | 'logout' | 'signUp',
  email?: FormDataEntryValue | null,
  password?: FormDataEntryValue | null
) => {
  if (action !== 'logout' && (!email || !password)) {
    console.error('Email and password are required.');
    return { success: false, message: 'Email and password are required.' };
  }

  try {
    const result = await handleFormAction(action, email, password);

    return { success: true, data: result };
  } catch (error) {
    console.error('An error occurred:', error);
    return { success: false, message: 'Failed to perform the action.' };
  }
};
