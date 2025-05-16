import React, { useEffect, useState } from 'react';
import style from './suggestionProductCard.module.scss';
import ProductImage from '../product/productImage/ProductImage';
import ProductDescription from '../product/productDescription/ProductDescription';
import ProductRatingContainer from '../product/productRatingContainer/ProductRatingContainer';
import ProductPrice from '../product/productPrice/ProductPrice';
import AddToFavoriteForm from '@/components/form/addToFavoriteForm/AddToFavoriteForm';
import AddToCartForm from '@/components/form/addToCartForm/AddToCartForm';

const SuggestionProductCard = ({
  product,
  favorites,
  isInCart,
  productRating,
}: {
  product: IProduct;
  favorites: ICartData | null;
  isInCart: ICartProductList[];
  productRating: number | null; // Rating of the product
}) => {
  return (
    <div className={style.suggestion_product}>
      <div className={style.util_group}>
        <ProductImage product={product.thumbnail} />
        <AddToFavoriteForm
          product={product}
          favorites={favorites?.productCartList}
          isAbsolutePosition="absolute"
        />
      </div>
      <ProductDescription product={product.description} />
      <ProductRatingContainer productRating={productRating} />
      <div className="aux_container flex justify-between items-center">
        <ProductPrice price={product.price} currency="$" />
        <AddToCartForm
          action={'addToCart'}
          product={product}
          icon={true}
          isInCart={isInCart}
        />
      </div>
    </div>
  );
};

export default SuggestionProductCard;
