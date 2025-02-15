import MyAccountForm from '@/app/profile/modal/forms/myaccount/MyAccountForm';
import ModalElement from '@/app/profile/modal/ModalElement';
import ProfileModal from '@/app/profile/modal/ProfileModal';
import React from 'react';

const page = () => {
  return (
    <ProfileModal>
      <ModalElement>
        <MyAccountForm />
      </ModalElement>
    </ProfileModal>
  );
};

export default page;
