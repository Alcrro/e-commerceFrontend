import MainLayout from '@/components/layouts/mainLayout/MainLayout';
import ProductCard from '@/components/products/card/productCard/ProductCard';
import { productsApi } from '@/service/productsApi';
import React from 'react';
import style from './products.module.scss';
const page = async () => {
  const products = await productsApi();

  if (!products?.data) {
    return null;
  }

  const { data } = products;

  return (
    <MainLayout>
      <div className={style.products_main}>
        <div className={style.product_side_bar}>sidebar</div>
        <div className={style.product_header}>header</div>
        <div className={style.products}>
          {data.length < 1 ? (
            <div>No Products</div>
          ) : (
            data.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default page;
