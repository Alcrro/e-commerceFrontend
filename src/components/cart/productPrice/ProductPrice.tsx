import React from 'react';
import style from './productPrice.module.scss';
import deleteProductCartAction from '@/service/serverAction/deleteProductCartAction';
import ButtonLink from '@/components/buttons/defaultButton/Button';

const ProductPrice = ({ product }: { product: ICartProductList }) => {
  return (
    <div className={style.product_price_container}>
      <div className={style.product_price}>{product.price.toFixed(2)} lei</div>
      <div className={style.product_counter}>
        <div className={style.decrease}>-</div>
        <div className={style.counter}>{product.quantity}</div>
        <div className={style.increase}>+</div>
      </div>
      <div className={style.move_to_favorite}>Move to favorite</div>
      <div className={style.delete_from_cart}>
        <form action={deleteProductCartAction}>
          <input
            type="text"
            name="deleteProduct"
            defaultValue={product.productId}
            hidden
          />
          <ButtonLink usedForm={true} label="Delete" variant="danger" />
        </form>
      </div>
    </div>
  );
};

export default ProductPrice;
