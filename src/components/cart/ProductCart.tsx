import { cartApi } from '@/service/cartApi';
import React from 'react';
import style from './productCart.module.scss';
import ProductCardList from './ProductCardList';
import ProductTotalPrice from './productTotalPrice/ProductTotalPrice';
const ProductCart = async () => {
  const productsCart = await cartApi();

  return (
    <div className={style.my_cart_container}>
      <div className={style.title}>My Cart</div>
      <div className={style.my_cart_inner}>
        <div className={style.product_container}>
          <ProductCardList productCartList={productsCart?.data || null} />
        </div>
        <ProductTotalPrice />
      </div>
    </div>
  );
};

export default ProductCart;
