import React from 'react';
import style from './productVendor.module.scss';
import Link from 'next/link';
const ProductVendor = ({ product }: { product: ICartProductList }) => {
  return (
    <div className={style.product_vendor}>
      <div className={style.product_vendor_name}>
        Product delivered by ~Name~
      </div>
      <Link
        href={'/vendor/name/details-delivered'}
        className={style.product_vendor_details_delivered}
      >
        See the delivery, warranty and return policies
      </Link>
    </div>
  );
};

export default ProductVendor;
