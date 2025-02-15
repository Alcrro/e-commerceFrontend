import React from 'react';
import style from './productCard.module.scss';
import Image from 'next/image';
import { IProduct } from '@/service/productsApi';
import AddToCart from '@/components/buttons/addToCart/AddToCart';
import AddToFavoriteIcon from '@/components/buttons/addToFavorite/AddToFavoriteIcon';

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className={style.product_card}>
      <div className={`${style.image_container} relative`}>
        <Image src={'/me.png'} alt="product" width={1000} height={1000} />
        <AddToFavoriteIcon product={product} />
      </div>
      <div className="description_container">{product.description}</div>
      <div className="rating_container">rating</div>
      <div className="stack_container">stock: {product.stock}</div>
      <div className="stack_container">stock: {product.price}</div>
      <div className="button">
        <AddToCart action="addToCart" product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
