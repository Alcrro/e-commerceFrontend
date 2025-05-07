// app/components/ui/ProductStock.tsx
import React from 'react';
import style from './productStock.module.scss';

interface ProductStockProps {
  quantity: number; // Prop for the product's quantity
}

// app/components/ui/ProductStock.tsx
export const ProductStock = ({ quantity }: ProductStockProps) => {
  let stockMessage = '';
  let stockClass = '';

  if (quantity === 0) {
    stockMessage = 'Out of stock';
    stockClass = 'out-of-stock';
  } else if (quantity === 1) {
    stockMessage = 'Only 1 product left';
    stockClass = 'one-left';
  } else {
    stockMessage = 'Availability in stock';
  }

  return (
    <div className={style.product_stock}>
      <span className={`${style.stock} ${style[stockClass]}`}>
        {stockMessage}
      </span>
    </div>
  );
};
