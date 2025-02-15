import { API_SERVER } from '@/constants/apiConstants';

export const loginApi = async (
  email?: FormDataEntryValue | null,
  password?: FormDataEntryValue | null
) => {
  try {
    const response = await fetch(`${API_SERVER}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });

    // Check if the response is successful
    if (!response.ok) {
      // Log the status code and response body for debugging
      const responseBody = await response.text();
      console.error(`Error: ${response.status} - ${responseBody}`);
      throw new Error('Login failed');
    }

    // Try to parse the response body as JSON
    const data = await response.json();

    return data;
  } catch (error) {
    // Catch and log any errors
    console.error('Error in loginApi:', error);
    return null;
  }
};
