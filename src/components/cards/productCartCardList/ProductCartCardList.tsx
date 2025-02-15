import ProductDescription from '@/components/cart/productDescription/ProductDescription';
import ProductImage from '@/components/cart/productImage/ProductImage';
import React from 'react';

const ProductCartCardList = ({
  productCartList,
}: {
  productCartList: ICartProductList | null;
}) => {
  return (
    <>
      <ProductImage product={productCartList || null} />
      <ProductDescription product={productCartList || null} />
    </>
  );
};

export default ProductCartCardList;
