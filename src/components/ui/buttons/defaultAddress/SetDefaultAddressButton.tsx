'use client';

import React, { useState } from 'react';
import { IAddressList } from '@/service/addressApi';
import style from './defaultAddressButton.module.scss';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import setDefaultAddressAction from '@/service/serverAction/setDefaultAddressAction';

const SetDefaultAddressButton = ({ address }: { address: IAddressList }) => {
  const [isDefault, setIsDefault] = useState(address.isDefault);

  const handleSubmit = async (formData: FormData) => {
    setIsDefault((prev) => !prev); // Optimistically update UI
    await setDefaultAddressAction(formData); // Call server action
  };

  return (
    <div className={style.set_default_address_button}>
      <form action={handleSubmit} key={address._id}>
        <input type="text" name="userId" defaultValue={address.userId} hidden />
        <input type="text" name="_id" defaultValue={address._id} hidden />
        <button type="submit">
          <ToggleSwitch isChecked={isDefault} key={address._id} />
        </button>
      </form>
    </div>
  );
};

export default SetDefaultAddressButton;
