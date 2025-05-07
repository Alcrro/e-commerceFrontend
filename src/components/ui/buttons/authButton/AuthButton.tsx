import React from 'react';
import ButtonLink from '../defaultButton/Button';

const AuthButton = ({
  action,
  isDisabled,
}: {
  action: 'login' | 'Sign up' | 'pending';
  isDisabled: boolean;
}) => {
  return (
    <div className="login_button w-full">
      <ButtonLink
        label={action === 'login' ? 'Login' : 'Sign Up'}
        usedForm={true}
        disabled={isDisabled}
        ariaLabel={action}
        classname="w-full"
      />
    </div>
  );
};

export default AuthButton;
