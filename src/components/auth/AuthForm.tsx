// components/auth/AuthForm.tsx
'use client';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { switchText } from '@/constants/authConstants';
import AuthButton from '../ui/buttons/authButton/AuthButton';
import TitleForm from '../ui/auth/TitleForm';
import AuthFormWrapper from './AuthFormWrapper';
import FormFields from './formFields/FormFields';
import ThirdPartyAuth from './ThirdPartyAuth';
import SwitchAuthText from './SwitcchAuthText';
import RedirectTo from '../ui/redirect/SuccessRedirect';
import { useAuthStore } from '@/store/userAuthStore';
import useAuthForm from '../form/useAuthForm';
import handleLoginAction from '@/service/serverAction/loginAction';
import registerUserAction from '@/service/serverAction/registerUserAction';

interface AuthFormProps {
  title: 'login' | 'sign-up';
  handleAction?: (formData: FormData) => Promise<any>;
  extraFields?: { name: string; label: string; type: string }[];
}
const AuthForm = ({
  title,
  handleAction = title === 'login' ? handleLoginAction : registerUserAction, // default to login
  extraFields = [],
}: AuthFormProps) => {
  const { onSubmit, fieldErrors, extraValues, setExtraValues } = useAuthForm(
    extraFields,
    handleAction
  );

  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);

  return (
    <AuthFormWrapper title={title}>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <TitleForm titleName={title} />
        <FormFields
          title={title}
          extraFields={extraFields}
          extraValues={extraValues}
          setExtraValues={setExtraValues}
          fieldErrors={fieldErrors}
        />
        {title === 'login' && (
          <div className="text-right mt-1">
            <a
              href="/auth/change-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Change password?
            </a>
          </div>
        )}
        {fieldErrors.email && (
          <span id="email-error" className="text-sm text-center text-red-600">
            {fieldErrors.email}
          </span>
        )}
        <div>
          <AuthButton action={title} isDisabled={false} />
        </div>

        {isLoggedIn && (
          <RedirectTo
            to="/"
            title="You are logged in Successfully"
            message="Success! Redirecting to home in "
          />
        )}
        <ThirdPartyAuth
          onGoogleLogin={() => alert('Google')}
          onGithubLogin={() => alert('GitHub')}
        />
        <SwitchAuthText {...switchText(title)} />
      </form>
    </AuthFormWrapper>
  );
};

export default AuthForm;
