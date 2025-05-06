import React from 'react';
import style from './productPrice.module.scss';

interface ProductPriceProps {
  price: number; // The price of the product
  currency: string; // The currency symbol (e.g., "lei", "$", etc.)
}

const ProductPrice = ({ price, currency }: ProductPriceProps) => {
  return (
    <div className={style.product_price_inner}>
      <div className={style.product_price}>
        {price.toFixed(2)} {currency} {/* Display price with currency */}
      </div>
    </div>
  );
};

export default ProductPrice
