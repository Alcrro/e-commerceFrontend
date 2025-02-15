import React from 'react';
import AddressCard from './AddressCard';
import { getAddressApi } from '@/service/addressApi';
import Link from 'next/link';
import style from './address.module.scss';
const Address = async () => {
  const address = await getAddressApi();

  const data = !address?.data ? [] : address.data;

  return (
    <div className={style.address_container}>
      <AddressCard addresses={data} />
    </div>
  );
};

export default Address;
