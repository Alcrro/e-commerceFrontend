'use client';
import React from 'react';
import ButtonLink from '../defaultButton/Button';
import { IProduct } from '@/service/productsApi';
import AddToCartAction from '@/service/serverAction/AddToCartAction';
import { useStore } from '@/hooks/AddToContext';

const AddToCart = ({
  action,
  product,
}: {
  action: 'addToCart';
  product: IProduct;
}) => {
  const { state, dispatch } = useStore();

  return (
    <form action={AddToCartAction}>
      <input type="number" name="price" defaultValue={product.price} hidden />
      <input type="string" name="productId" defaultValue={product._id} hidden />
      <ButtonLink
        label={action}
        usedForm={true}
        variant="primary"
        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
      />
    </form>
  );
};

export default AddToCart;
