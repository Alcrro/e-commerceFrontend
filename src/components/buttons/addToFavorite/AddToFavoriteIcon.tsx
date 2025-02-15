'use client';
import React, { useEffect, useState } from 'react';
import ButtonLink from '../defaultButton/Button';
import { IProduct } from '@/service/productsApi';
import AddToFavoriteAction from '@/service/serverAction/addToFavoriteAction';
import { useStore } from '@/hooks/AddToContext';
import style from './addToFavorite.module.scss';

const AddToFavoriteIcon = ({ product }: { product: IProduct }) => {
  const { state, dispatch } = useStore();

  // Check if the product is in the favorites list from the state
  const isInFavorites = state.favorites.some((fav) => fav._id === product._id);

  // Handle the toggle logic (add/remove product from favorites)
  const handleFavoriteToggle = () => {
    if (isInFavorites) {
      // Remove from favorites (dispatch action)
      dispatch({ type: 'REMOVE_FROM_FAVORITE', payload: product._id });
    } else {
      // Add to favorites (dispatch action)
      dispatch({ type: 'ADD_TO_FAVORITE', payload: product });
    }
  };
  useEffect(() => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: product });
  }, []);

  return (
    <form action={AddToFavoriteAction} className={style.add_to_favorite_form}>
      <input type="number" name="price" defaultValue={product.price} hidden />
      <input type="string" name="productId" defaultValue={product._id} hidden />
      <ButtonLink
        label={''}
        variant="none"
        usedForm={true}
        classname={!isInFavorites ? 'favorite_icon' : 'favorite_icon_added'}
        onClick={handleFavoriteToggle}
      />
    </form>
  );
};

export default AddToFavoriteIcon;
