import React from 'react';
import ButtonLink from '../defaultButton/Button';
import { IAddressList } from '@/service/addressApi';
import style from './defaultAddressButton.module.scss';

const SetDefaultAddressButton = ({ address }: { address: IAddressList }) => {
  return (
    <div className={style.set_default_address_button}>
      <ButtonLink
        label={address.isDefault ? 'Is default address' : 'Set default address'}
        isLink={true}
        href={`/profile/address/success/${address._id}`}
        variant={address.isDefault ? 'secondary' : 'danger'}
      />
    </div>
  );
};

export default SetDefaultAddressButton;
