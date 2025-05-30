'use client';
import React from 'react';
import AuthForm from '../AuthForm';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/userAuthStore';
import LogoutModal from '../logout/LogoutModal';

const AuthModal = () => {
  const pathname = usePathname();
  const pathSegment = pathname.split('/').pop();
  const isLogin = pathSegment === 'login';
  const formType = isLogin ? 'login' : 'sign-up';
  const isLogout = pathSegment === 'logout';
  const profile = useAuthStore((state) => state.user);

  return isLogout ? (
    <LogoutModal user={profile} />
  ) : (
    <AuthForm
      title={formType}
      extraFields={[
        {
          name: 'confirmPassword',
          label: 'confirmPassword',
          type: 'password',
        },
      ]}
    />
  );
};

export default AuthModal;
