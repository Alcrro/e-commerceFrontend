'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import ButtonLink from '@/components/ui/buttons/defaultButton/Button';
import style from './addToFavoriteForm.module.scss';
import { handleActionState } from '@/service/serverAction/createServerAction';
import { useFavoriteStore } from '@/store/useFavoriteStore';

const AddToFavoriteForm = ({
  product,
  favorites,
  isAbsolutePosition = 'absolute',
}: {
  product: IProduct;
  favorites: ICartProductList[] | undefined;
  isAbsolutePosition?: 'absolute' | 'relative';
}) => {
  const router = useRouter();
  const productCartList = useFavoriteStore(
    (state) => state.favorites.productCartList
  );
  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);
  const favoritesList = useMemo(
    () => favorites?.find((fav) => fav.productId === product._id),
    [favorites, product._id]
  );
  // Check if the product is already in favorites

  const isFavorite = useMemo(
    () => productCartList?.some((fav) => fav.productId === product?._id),
    [productCartList, product._id]
  );

  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current && !isFavorite && favoritesList) {
      addFavorite(favoritesList);
      hasInitialized.current = true;
    }
  }, [favoritesList, isFavorite, addFavorite]);

  const handleSubmit = async (formData: FormData) => {
    const response = await handleActionState('addToFavorite', {}, formData);

    if (response.success) {
      if (isFavorite) {
        removeFavorite(product._id);
      } else if (favoritesList) {
        return addFavorite(favoritesList);
      }
    }

    router.refresh();
  };

  return (
    <form
      action={handleSubmit}
      className={`${style.add_to_favorite_form} ${
        isAbsolutePosition === 'absolute' ? style.isAbsolute : style.isRelative
      }`}
    >
      <input type="number" name="price" defaultValue={product.price} hidden />
      <input type="text" name="productId" defaultValue={product._id} hidden />
      <ButtonLink
        label=""
        variant="none"
        usedForm={true}
        ariaLabel="favorite_icon"
        icon={
          <span
            className={`${style.favorite_icon} ${
              isFavorite ? style.isAdded : style.isDefault
            }`}
          ></span>
        }
      />
    </form>
  );
};

export default AddToFavoriteForm;
