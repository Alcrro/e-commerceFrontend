import React from 'react';
import style from './favorite.module.scss';
import FavoriteTitle from './favoriteTitle/FavoriteTitle';
import ProductCartCardList from '../cards/productCartCardList/ProductCartCardList';
import FavoriteTab from './favoriteAuxTab/FavoriteTab';

const Favorite = async ({ favorites }: { favorites: ICartData | null }) => {
  return (
    <div className={style.favorite_container}>
      <FavoriteTitle />
      <FavoriteTab nameList={favorites || null} />

      <div className={style.product_container}>
        {favorites?.productCartList.map((product) => (
          <div
            className={style.product_container_inner}
            key={product.productId}
          >
            <ProductCartCardList
              productCartList={product || null}
              key={product.productId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
