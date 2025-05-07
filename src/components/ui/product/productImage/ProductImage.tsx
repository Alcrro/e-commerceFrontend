'use client';
import React, { useState } from 'react';
import style from './productImage.module.scss';
import Image from 'next/image';

const ProductImage = ({ product }: { product: string }) => {
  const [imageSrc, setImageSrc] = useState(product || 'no-image.webp');

  return (
    <div className={style.product_image}>
      <Image
        src={`/${imageSrc}`}
        alt={product || 'No Image'}
        width={1000}
        height={1000}
        onError={() => setImageSrc('no-image.webp')} // Fallback image on error
      />
    </div>
  );
};

export default ProductImage;
