'use client';
import { IAddressList } from '@/service/addressApi';
import setDefaultAddressAction from '@/service/serverAction/setDefaultAddressAction';
import React, { useActionState, useState } from 'react';
import ModalCloseButton from '../buttons/ModalCloseButton';
import SetDefaultAddressButton from '../buttons/defaultAddress/SetDefaultAddressButton';

const SetDefaultAddressForm = ({ address }: { address: IAddressList }) => {
  const [state, formAction] = useActionState(setDefaultAddressAction, null);

  return (
    // TODO - Refactor this form look it to this link- <link>
    // https://www.youtube.com/watch?v=NVddtG6syJg
    <>
      <ModalCloseButton />
      <form action={formAction} className="ml-auto" name="form">
        {/* Hidden Inputs for User ID and Address ID */}
        <input type="hidden" name="userId" defaultValue={address.userId} />
        <input type="hidden" name="_id" defaultValue={address._id} />

        {/* Checkbox for Setting Default Address */}
        <div className="form-group relative">
          <input
            type="checkbox"
            name="isDefault"
            id={`isDefault-${address._id}`}
            defaultChecked={address.isDefault}
            className="relative z-0"
          />
        </div>

        <button type="submit">merge</button>
      </form>
    </>
  );
};

export default SetDefaultAddressForm;
