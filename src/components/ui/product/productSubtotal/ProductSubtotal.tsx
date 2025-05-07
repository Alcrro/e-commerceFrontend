import React from 'react';
import style from './productSubtotal.module.scss';
const ProductSubtotal = ({ product }: { product: ICartProductList }) => {
  return (
    <>
      <div className={style.cost_details}>
        <div className={style.product_cost}>Cost of products: Price lei</div>
        <div className={style.delivery_cost_processing}>
          Delivery and processing cost: Price lei
        </div>
      </div>
      <div className={style.subtotal_cost}>Subtotal: ~Price~</div>
    </>
  );
};

export default ProductSubtotal;
