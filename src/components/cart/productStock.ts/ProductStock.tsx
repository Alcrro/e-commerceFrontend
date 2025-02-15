import React from 'react';
import style from './productStock.module.scss';

const ProductStock = () => {
  return (
    <div className={style.product_stock}>
      <span className={style.stock}>Availability in stock</span>
    </div>
  );
};

export default ProductStock;
