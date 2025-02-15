import ButtonLink from '@/components/buttons/defaultButton/Button';
import React from 'react';
import style from './productTotalPrice.module.scss';

const ProductTotalPrice = () => {
  return (
    <div className={`${style.total_order}`}>
      <div className="header">
        <div className="title">Summery order</div>
      </div>
      <div className="body">
        <div className="const_summery_details">
          <div className={style.product_cost}>Cost of products: Price lei</div>
          <div className={style.delivery_cost_processing}>
            Delivery and processing cost: Price lei
          </div>
        </div>
        <div className="summary_order_total_cost">
          <div className="total_title">Total:</div>
          <div className="total_cost">Total:</div>
        </div>
      </div>
      <div className="footer">
        <form action="">
          <ButtonLink usedForm={true} label="Continue" />
        </form>
      </div>
    </div>
  );
};

export default ProductTotalPrice;
