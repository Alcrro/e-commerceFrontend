'use client';
import React, { FormEvent, useState } from 'react';
import style from './auth.module.scss';
import AuthButton from '@/components/buttons/authButton/AuthButton';
import InputField from './InputField';
import { actionFormHandler } from './ActionFormHandler';
import { useRouter } from 'next/navigation';

interface AuthFormProps {
  action: 'login' | 'signUp';
}

const AuthForm = ({ action }: AuthFormProps) => {
  const [email, setEmail] = useState(''); // Initialized as an empty string
  const [password, setPassword] = useState(''); // Initialized as an empty string
  const [error, setError] = useState(''); // Error state
  const router = useRouter();
  // Correct event type for form submission
  const actionHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await actionFormHandler(action, email, password);

    if (result.success) {
      // Redirect to profile or show success message
      router.push('/profile'); // Example: redirect to the profile page
    } else {
      // Display error message
      setError(result?.message ?? 'An unknown error occurred.');
    }
  };

  return (
    <form onSubmit={actionHandler} className={style.form}>
      {/* Display error message if it exists */}
      {error && <div className={style.error_message}>{error}</div>}

      <div className={style.group_label}>
        <label htmlFor="email">Email</label>
        <InputField
          type="email"
          name="email"
          propName={email} // Make sure this is a defined state
          setPropName={setEmail} // Make sure this is correctly updating state
        />
      </div>

      <div className={style.group_label}>
        <label htmlFor="password">Password</label>
        <InputField
          type="password"
          name="password"
          propName={password} // Make sure this is a defined state
          setPropName={setPassword} // Make sure this is correctly updating state
        />
      </div>

      <div className={style.buton_auth_conainer}>
        <AuthButton action={action} />
      </div>
    </form>
  );
};

export default AuthForm;
