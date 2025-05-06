import MainLayout from '@/components/layouts/mainLayout/MainLayout';
import Breadcrumbs from '@/components/singlePage/breadcrumbs/Breadcrumbs';
import ProductTitle from '@/components/singlePage/title/ProductTitle';
import ProductRating from '@/components/ui/product/productRating/ProductRating';
import { getProductRatingApi } from '@/service/productRatingApi';
import { getProductApi, productsApi } from '@/service/productsApi';
import React from 'react';

interface IParams {
  params: Promise<{ slug: string }>;
}

const page = async ({ params }: IParams) => {
  const { slug } = await params;

  const product = await getProductApi(slug);

  if (!product?.data) return null;

  const productRating = await getProductRatingApi(product.data._id);
  if (!productRating?.data) return null;

  return (
    <MainLayout>
      <Breadcrumbs />
      <ProductTitle slug={'product'} product={product?.data} />
      <div className="product_container_info">
        <ProductRating rating={productRating?.data[0]?.rating} />
      </div>
    </MainLayout>
  );
};

export default page;
