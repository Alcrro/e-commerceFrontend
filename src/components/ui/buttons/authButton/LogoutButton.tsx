'use client';
import React, { FormEvent } from 'react';
import ButtonLink from '../defaultButton/Button';
import { useRouter } from 'next/navigation';
import { actionFormHandler } from '@/app/auth/components/ActionFormHandler';
import style from './logoutButton.module.scss';
import CustomIcon from '../../icon/Icon';

const LogoutButton = () => {
  // Correct event type for form submission
  const router = useRouter();
  const actionHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await actionFormHandler('logout');

    if (result.success) {
      // Redirect to profile or show success message
      router.push('/'); // Example: redirect to the profile page
      router.refresh();
    } else {
      console.log('SOmeting is wrong!');
    }
  };
  return (
    <div className={style.logout_button}>
      <form onSubmit={actionHandler} className="w-full px-1">
        <ButtonLink
          label={'Logout'}
          usedForm={true}
          variant="none"
          ariaLabel="logout"
          classname="w-full align-middle gap-2 hover:opacity-30 hover:text-[#797979] transition-colors duration-300 ease-in-out
"
          // classnameLabel="w-full"
          icon={
            <CustomIcon
              iconUnicode="\F4FF"
              classname="block bg-[var(--button-color-danger)] rounded-xl p-2"
              srcIsEnabled={false}
            />
          }
        />
      </form>
    </div>
  );
};
export default LogoutButton;
