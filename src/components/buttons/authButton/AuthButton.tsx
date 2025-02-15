import React from 'react';
import ButtonLink from '../defaultButton/Button';

const AuthButton = ({ action }: { action: string }) => {
  return <ButtonLink label={action === 'login' ? 'Login' : 'Sign Up'} />;
};

export default AuthButton;
