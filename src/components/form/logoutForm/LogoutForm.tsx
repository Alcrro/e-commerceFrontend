import LogoutButton from '@/components/ui/buttons/authButton/LogoutButton';
import React from 'react';
import { useAuthStore } from '@/store/userAuthStore';
import { logoutAction } from '@/service/serverAction/logoutAction';

const LogoutForm = () => {
  const useLogoutStore = useAuthStore((store) => store.logout);

  const onSubmit = async () => {
    const result = await logoutAction();
    if (result) {
      useLogoutStore();
    }
  };
  return (
    <div onClick={onSubmit}>
      <LogoutButton />
    </div>
  );
};

export default LogoutForm;
