import Link from 'next/link';
import React from 'react';
import style from './productWorksWith.module.scss';

const ProductWorksWith = () => {
  return (
    <div className={style.product_works_with}>
      <Link href={'/product/product_link/products-works'}>
        {'>>'} Frequently bought together
      </Link>
    </div>
  );
};

export default ProductWorksWith;
