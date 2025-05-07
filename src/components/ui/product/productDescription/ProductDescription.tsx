import React from 'react';
import style from './productDescription.module.scss';

interface ProductDescriptionProps {
  product: string;
  truncate?: boolean; // New optional prop to control truncation
}

const ProductDescription = ({
  product,
  truncate = true,
}: ProductDescriptionProps) => {
  return (
    <div className={style.product_description_inner}>
      <div
        className={`${style.product_description} ${truncate ? style.truncated : ''}`}
      >
        {product}
      </div>
    </div>
  );
};

export default ProductDescription;
