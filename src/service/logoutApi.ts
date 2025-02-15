import { API_SERVER } from '@/constants/apiConstants';

export const logoutApi = async () => {
  try {
    const response = await fetch(`${API_SERVER}/api/auth/logout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // Ensures cookies are sent with the request
    });

    if (!response.ok) {
      console.log(
        `Logout failed with status ${response.status}: ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
