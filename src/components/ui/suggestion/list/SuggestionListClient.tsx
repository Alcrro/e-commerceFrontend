'use client';
import React, { useState, useEffect } from 'react';
import Carousel from '../../carousel/Carousel';
import SuggestionProductCard from '../SuggestionProductCard';
import SkeletonProductCard from '../../skeleton/skeletonProductCard/SkeletonProductCard';

const SuggestionListClient = ({
  data,
  cart,
  favorites,
  ratings,
}: {
  data: IProduct[];
  cart: ICartProductList[];
  favorites: ICartData | null;
  ratings: { [key: string]: number | null };
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // simulate loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <Carousel
      items={isLoading ? new Array(6).fill(null) : data}
      infiniteLoop={false}
      variant="variant_two"
      renderItem={(product) => {
        if (isLoading || !product) return <SkeletonProductCard />;

        const itemsCount = cart.filter(
          (filter) => filter.productId === product._id
        );

        const productRating =
          product._id && ratings[product._id] !== null
            ? ratings[product._id]
            : null;

        return (
          <SuggestionProductCard
            product={product}
            favorites={favorites}
            isInCart={itemsCount}
            productRating={productRating}
          />
        );
      }}
    />
  );
};

export default SuggestionListClient;
