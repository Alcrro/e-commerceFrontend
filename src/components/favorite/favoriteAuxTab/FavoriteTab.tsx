'use client';
import React, { useState } from 'react';
import FavoriteAuxTab from './FavoriteAuxTab';
import style from './favoriteTab.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ICartData {
  nameList: string[];
  productCartList: { productId: string; listName: string }[];
}

const FavoriteTab = ({ nameList }: { nameList: ICartData | null }) => {
  if (!nameList || !nameList.nameList.length) {
    return null;
  }
  const pathname = usePathname();
  const t = pathname.split('/');
  const pSlug = t[t.length - 1];

  return (
    <>
      <div className={style.favorite_aux_tab_container}>
        <div
          className={`${style.favorite_aux_tab_inner} ${
            nameList.nameList.length >= 4 ? style.more_items : style.items
          }`}
        >
          <Link
            href={`/profile/favorite`}
            className={`${style.favorite_aux_tab_inner} ${style.tab} ${t[t.length - 1] === 'favorite' && t.length <= 3 ? style.active : ''}`}
          >
            All Products
          </Link>
          {nameList.nameList.map((tab, index) => (
            <FavoriteAuxTab
              tab={tab}
              key={`${tab}-${index}`} // Ensure unique keys
            />
          ))}
        </div>
      </div>
      {pSlug === 'favorite' ? (
        <FavoriteTab.AllProducts data={nameList} />
      ) : (
        <FavoriteTab.Favorite data={nameList} list="" />
      )}
    </>
  );
};

FavoriteTab.AllProducts = ({ data }: { data: ICartData }) => {
  const productMap: Record<string, Set<string>> = {};

  data.productCartList.forEach(({ productId, listName }) => {
    if (!productMap[productId]) {
      productMap[productId] = new Set();
    }
    productMap[productId].add(listName);
  });

  return (
    <div className={`${style.product_favorite_title} ${style.tab}`}>
      <span className={style.title}>All Products</span>
      <span className={style.info}>
        {data.productCartList.length} product(s) across {data.nameList.length}{' '}
        list(s)
      </span>
    </div>
  );
};

FavoriteTab.Favorite = ({ data, list }: { data: ICartData; list: string }) => {
  return (
    <div className={`${style.product_favorite_title} ${style.tab}`}>
      <span className={style.title}>{data.productCartList[0].listName}</span>{' '}
      <span className={style.info}>
        {data.productCartList.length}{' '}
        {data.productCartList.length === 1 ? 'product' : 'products'}
      </span>
    </div>
  );
};

export default FavoriteTab;
