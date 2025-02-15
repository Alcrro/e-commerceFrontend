import React from 'react';
import AuthForm from '../components/AuthForm';
import TitleForm from '../components/TitleForm';

const page = () => {
  return (
    <>
      <TitleForm titleName="Sign Up" />
      <AuthForm action={'signUp'} />
    </>
  );
};

export default page;
