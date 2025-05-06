import { ICartProductList } from '@/types/CartProductList';
import React from 'react';

const ContentModalNavbarList = <T,>({ item }: { item: any }) => {
  return <div>{item?.productDetails?.name}</div>;
};

export default ContentModalNavbarList;
