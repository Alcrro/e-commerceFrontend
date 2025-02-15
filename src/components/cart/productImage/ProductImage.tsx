import React from 'react';
import style from './productImage.module.scss';
import Image from 'next/image';

const ProductImage = ({ product }: { product: ICartProductList | null }) => {
  if (!product?.productDetails?.thumbnail) {
    return (
      <div className={style.product_image}>
        <Image src={'/me.png'} alt="" width={1000} height={1000} />
      </div>
    );
  }

  return (
    <div className={style.product_image}>
      <Image
        src={product.productDetails.thumbnail}
        alt={product.productDetails.name}
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default ProductImage;
