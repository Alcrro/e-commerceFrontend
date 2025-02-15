import React from 'react';
import AuthForm from '../components/AuthForm';
import TitleForm from '../components/TitleForm';
import AuthLayout from '@/components/layouts/authLayout/AuthLayout';

const page = () => {
  return (
    <AuthLayout>
      <TitleForm titleName="login" />
      <AuthForm action="login" />
    </AuthLayout>
  );
};

export default page;
