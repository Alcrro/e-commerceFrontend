import React from 'react';
import ProductRating from '../productRating/ProductRating';
import { getProductRatingApi } from '@/service/productRatingApi';

const ProductRatingContainer = ({
  productRating,
}: {
  productRating: number | null;
}) => {
  return <ProductRating rating={!productRating ? 0 : productRating} />;
};

export default ProductRatingContainer;
