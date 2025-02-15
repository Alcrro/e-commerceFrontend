'use client';
import React, { FormEvent } from 'react';
import ButtonLink from '../defaultButton/Button';
import { useRouter } from 'next/navigation';

import { actionFormHandler } from '@/app/auth/components/ActionFormHandler';

interface AuthFormProps {
  action: 'login' | 'signUp' | 'logout';
}

const LogoutButton = ({ action }: AuthFormProps) => {
  // Correct event type for form submission
  const router = useRouter();
  const actionHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await actionFormHandler(action);

    if (result.success) {
      // Redirect to profile or show success message
      router.push('/'); // Example: redirect to the profile page
    } else {
      console.log('blabla');
    }
  };
  return (
    <form onSubmit={actionHandler}>
      <ButtonLink label={'Logout'} usedForm={true} variant="danger" />
    </form>
  );
};
export default LogoutButton;
