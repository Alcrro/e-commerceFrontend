'use client';
import UpdateProfileAddressButton from '@/components/profileModal/UpdateProfileAddressButton';
import { INewAddressList } from '@/service/addressApi';
import updateProfileAddressAction from '@/service/serverAction/updateToAddressAction';
import React, { useActionState, useRef } from 'react';
import style from './addressForm.module.scss';
import { formatPhoneNumber } from '@/utils/validations/validation';
import { useClickOutside } from '@/hooks/clickOutside';

const AddressForm = ({ address }: { address: INewAddressList }) => {
  const [state, formAction, isPending] = useActionState(
    updateProfileAddressAction,
    undefined
  );
  const formRef = useRef<HTMLFormElement>(null!);

  useClickOutside(formRef, () => window.history.back());

  return (
    <form
      action={formAction}
      className={style.edit_address_form_container}
      ref={formRef}
    >
      <>
        <input type="text" name="_id" defaultValue={address?._id} hidden />
        <input
          type="text"
          name="isDefault"
          defaultChecked={address?.isDefault}
          hidden
        />

        <div className={style.edit_address_form}>
          <div className={style.form_group}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="name"
              defaultValue={address?.fullName}
            />
          </div>
          <div className={style.form_group}>
            <div className={style.form_group_combined}>
              <div className={style.form_group}>
                <label htmlFor="countryCode">C.C</label>
                <input
                  type="text"
                  name="phoneCode"
                  id="countryCode"
                  defaultValue={address?.phoneCode}
                  maxLength={4}
                  className={style.countryCode}
                />
              </div>{' '}
              <div className={`${style.form_group} ${style.phone_number}`}>
                <label htmlFor="phone_number">Phone Number</label>
                <input
                  type="tel"
                  onChange={() => formatPhoneNumber(address.phoneNoWIthoutPC)}
                  name="phoneNoWIthoutPC"
                  id="phone_number"
                  maxLength={12}
                  defaultValue={address?.phoneNoWIthoutPC}
                />
              </div>
            </div>
          </div>
          <div className={style.form_group}>
            <label htmlFor="addressLine1">Address Line 1</label>
            <input
              type="text"
              name="addressLine1"
              id="addressLine1"
              defaultValue={address?.addressLine1}
            />
          </div>
          <div className={style.form_group}>
            <label htmlFor="addressLine2">Address Line 2</label>
            <input
              type="text"
              name="addressLine2"
              id="addressLine2"
              defaultValue={address?.addressLine2}
            />
          </div>{' '}
          <div className={style.form_group}>
            <label htmlFor="state">State</label>
            <input
              type="text"
              name="state"
              id="state"
              defaultValue={address?.state}
            />
          </div>{' '}
          <div className={style.form_group}>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              defaultValue={address?.country}
            />
          </div>
          <div className={style.form_group}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              defaultValue={address?.city}
            />
          </div>
          <div className={style.form_group}>
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              defaultValue={address?.postalCode}
            />
          </div>
        </div>
      </>

      <UpdateProfileAddressButton
        label={isPending ? 'Updating...' : 'Update'}
      />
      {state?.message && (
        <p
          className={
            state.success ? 'text-center text-green-500' : 'text-red-500'
          }
        >
          {state.message}
        </p>
      )}
    </form>
  );
};

export default AddressForm;
