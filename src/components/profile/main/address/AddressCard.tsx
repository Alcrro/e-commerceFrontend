import { IAddressList } from '@/service/addressApi';
import React from 'react';
import style from './addressCard.module.scss';
import ButtonLink from '@/components/buttons/defaultButton/Button';
import SetDefaultAddressButton from '@/components/buttons/defaultAddress/SetDefaultAddressButton';

const AddressCard = ({ addresses }: { addresses: IAddressList[] | null }) => {
  return (
    <div className={style.profile_address}>
      <div className={style.profile_address_title}>My addresses</div>
      <ul>
        {addresses?.map((address, key) => (
          <div className={style.address_outer} key={key}>
            <div className={style.address_inner} key={key}>
              <div className={style.address_header}>
                <span>{address.fullName}</span> -{' '}
                <span>{address.phoneNumber}</span>
              </div>
              <div className={style.address_body}>
                <span>{address.addressLine1}</span>,{' '}
                <span>{address.addressLine2}</span>,{' '}
                <span>{address.state}</span>, <span>{address.country}</span>
              </div>
              <div className={style.address_footer}>
                <div className={style.address_button_edit}>
                  <ButtonLink
                    label="Edit"
                    isLink={true}
                    href={`/profile/address/edit-address/${address._id}`}
                  />
                </div>
                <div className={style.address_button_delete}>
                  <ButtonLink
                    label="Delete"
                    isLink={true}
                    href={`/profile/address/delete-address/${address._id}`}
                  />
                </div>
                <SetDefaultAddressButton address={address} />
                {/* <SetDefaultAddressForm address={address} /> */}
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AddressCard;
