export const logoutAction = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    if (!response.ok) {
      console.error('Logout failed', await response.json());
    } else {
      return response.ok;
    }
  } catch (error) {
    console.log('logout error: ', error);

    return false;
  }
};
