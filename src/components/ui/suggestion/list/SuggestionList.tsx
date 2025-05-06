import React from 'react';
import style from './suggestionList.module.scss';
import { favoriteApi } from '@/service/favoriteApi';
import { cartApi } from '@/service/cartApi';
import SuggestionListClient from './SuggestionListClient';
import { getProductRatingApi } from '@/service/productRatingApi';

const SuggestionList = async ({ data }: { data: IProduct[] }) => {
  const favorites = await favoriteApi('');
  const cart = await cartApi();
  const productCartList = cart?.data?.productCartList || [];
  const productFavoriteList = favorites?.data || null;

  // Fetching ratings for each product
  const ratingsPromises = data.map(
    (product) => getProductRatingApi(product._id) // Assuming you have a function that fetches the rating by product ID
  );

  // Wait for all ratings to be fetched
  const ratings = await Promise.all(ratingsPromises);

  // Create a map of productId to rating

  // Map ratings to products, with fallback for missing ratings
  const ratingsMap = data.reduce(
    (acc, product, index) => {
      const ratingResponse = ratings[index];
      const ratingValue = ratingResponse?.data?.[0]?.rating ?? null; // fallback to null if missing
      acc[product?._id] = ratingValue;
      return acc;
    },
    {} as { [key: string]: number | null }
  );

  return (
    <div className={style.suggestion_products_list}>
      <SuggestionListClient
        data={data}
        cart={productCartList}
        favorites={!productFavoriteList ? null : productFavoriteList}
        ratings={ratingsMap}
      />
    </div>
  );
};

export default SuggestionList;
