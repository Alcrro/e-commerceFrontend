export const dynamic = 'force-dynamic';

import ProductCard from '@/components/products/card/productCard/ProductCard';
import { productsApi } from '@/service/productsApi';
import React from 'react';
import style from '../main.module.scss';
import ProductSecondaryLayout from '@/components/products/layouts/ProductSecondaryLayout';
import { favoriteApi } from '@/service/favoriteApi';

const page = async ({ params }: { params: Promise<{ slug: [] }> }) => {
  const { slug } = await params;

  const [data, favorite] = await Promise.all([
    productsApi(slug),
    favoriteApi(''),
  ]);

  const products: IProduct[] = data?.data?.products ?? [];
  const favorites: ICartData | null = !favorite?.data ? null : favorite.data;
  const filters: Record<string, string[]> = data?.data?.filters ?? {};

  return (
    <ProductSecondaryLayout>
      <div className={style.main_product_container}>
        {products?.length < 1 ? (
          <div className={style.main_products_length}>No products found!</div>
        ) : (
          <ul className={style.main_products_inner}>
            {products.map((product) => {
              return (
                <ProductCard
                  product={product}
                  favorites={favorites}
                  key={product._id}
                />
              );
            })}
          </ul>
        )}
      </div>
    </ProductSecondaryLayout>
  );
};

export default page;
