import React from 'react';
import style from './favoriteTitle.module.scss';

const FavoriteTitle = () => {
  return (
    <div className={style.favorite_title_container}>
      <div className={style.favorite_title_inner}>
        <div className={style.favorite_title}>Favorite</div>
        <div className={style.create_new_list_container}></div>
      </div>
    </div>
  );
};

export default FavoriteTitle;
