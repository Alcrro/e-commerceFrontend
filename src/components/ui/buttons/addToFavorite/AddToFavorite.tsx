import React from 'react';
import AddToFavoriteForm from '@/components/form/addToFavoriteForm/AddToFavoriteForm';

const AddToFavorite = async ({
  product,
  favorites,
}: {
  product: IProduct;
  favorites: ICartData;
}) => {
  let isInFavorites = favorites?.productCartList?.some(
    (exist) => exist.productId === product._id
  ) as boolean;

  return (
    <AddToFavoriteForm
      product={product}
      favorites={favorites.productCartList}
    />
  );
};

export default AddToFavorite;
