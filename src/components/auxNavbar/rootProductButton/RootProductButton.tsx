import ProductButton from '@/components/ui/buttons/productButton/ProductButton';
import React from 'react';
import style from './rootProductButton.module.scss';
import { headers } from 'next/headers';

const RootProductButton = async () => {
  const pathname = (await headers()).get('x-pathname');

  return (
    <div
      className={`${style.aux_navbar_product_button_container} ${pathname !== '/' && style.home}`}
    >
      <ProductButton />
    </div>
  );
};

export default RootProductButton;
