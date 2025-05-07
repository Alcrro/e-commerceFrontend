import ButtonLink from '@/components/ui/buttons/defaultButton/Button';
import React from 'react';
import style from './productTotalPrice.module.scss';

import Costs from '../../costs/Costs';

const ProductTotalPrice = ({ product }: { product: ICartData }) => {
  return (
    <div className={`${style.total_order}`}>
      <div className="header">
        <div className={style.title}>Summery order</div>
      </div>
      <div className="body">
        <div className="const_summery_details pb-3">
          <div className={style.product_cost}>
            <Costs description="products" price={product.totalPrice} />
          </div>
          <div className={style.delivery_cost_processing}>
            <Costs description="delivery" price={11} />
          </div>
        </div>
        <div className="summary_order_total_cost">
          {/* <div className="total_title">Total: {product.totalPrice}</div> */}
          <div className={style.total_cost}>
            <span className={style.description}>Total:</span>
            <Costs price={product.totalPrice + 11} />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className={style.checkout_order}>
          <form action="">
            <ButtonLink
              usedForm={true}
              label="Continue"
              ariaLabel="checkout"
              variant="none"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductTotalPrice;
