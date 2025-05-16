export const dynamic = 'force-dynamic';

import MainLayout from '@/components/layouts/mainLayout/MainLayout';
import React from 'react';
import style from './layouts.module.scss';
import { productsApi } from '@/service/productsApi';
import FiltersCategory from '@/components/products/filtersCategory/FilterSCategory';
import ProductCard from '@/components/products/card/productCard/ProductCard';
import { favoriteApi } from '@/service/favoriteApi';

const layout = async ({ params }: { params: Promise<{ slug: [] }> }) => {
  const slug = (await params).slug;
  const [data, favorite] = await Promise.all([
    productsApi(slug),
    favoriteApi(''),
  ]);
  const products: IProduct[] = data?.data?.products ?? [];
  const favorites: ICartData | null = favorite?.data ?? null;
  const filters: Record<string, string[]> = data?.data?.filters ?? {};

  return (
    <MainLayout>
      <div className={style.products_main_container}>
        <div className={style.menus_product_container}>
          <div className="tree_container h-[420px] w-full p-4 bg-[var(--container-bg-between)] rounded-lg">
            Tree Container
          </div>
          <div className={`${style.filters_product_container} w-full`}>
            <FiltersCategory filters={filters} />
          </div>
        </div>
        <div className={`${style.header_main_container} flex flex-col gap-3`}>
          <div
            className={`${style.header_container} h-[240px] p-4 bg-[var(--container-bg-between)] pb-3 rounded-lg`}
          >
            Header
          </div>
          <div className={style.main_product_container}>
            {products?.length < 1 ? (
              <div className={style.main_products_length}>
                No products found!
              </div>
            ) : (
              <ul className={style.main_products_inner}>
                {products.map((product) => (
                  <ProductCard
                    product={product}
                    favorites={favorites}
                    key={product._id}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* {children} */}
      </div>
    </MainLayout>
  );
};

export default layout;
