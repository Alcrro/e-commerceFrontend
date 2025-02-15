import React from 'react';
import style from './productDescription.module.scss';

const ProductDescription = ({
  product,
}: {
  product: ICartProductList | null;
}) => {
  return (
    <div className={style.product_description}>
      <div className="da">{product?.productDetails?.description}</div>
    </div>
  );
};

export default ProductDescription;
