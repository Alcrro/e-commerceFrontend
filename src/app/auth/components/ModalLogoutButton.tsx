import LogoutButton from '@/components/buttons/authButton/LogoutButton';
import { cookies } from 'next/headers';
import React from 'react';

const ModalLogoutButton = async () => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('authToken')?.value;

  // Pass the token as a prop to the client component
  return !authToken ? null : <LogoutButton action="logout" />;
};

export default ModalLogoutButton;
