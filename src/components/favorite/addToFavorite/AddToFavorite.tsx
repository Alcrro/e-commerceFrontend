import { favoriteApi } from '@/service/favoriteApi';
import React from 'react';

const AddToFavorite = async () => {
  const favorites = await favoriteApi('');

  // const isInFavorites = favorites?.data?.productCartList.some(
  //   (exist) => exist.productId === product._id
  // );

  return <div>AddToFavorite</div>;
};

export default AddToFavorite;
