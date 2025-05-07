import CompareProduct from '@/components/ui/buttons/compareProduct/CompareProduct';
import ShareButton from '@/components/ui/buttons/shareButton/ShareButton';
import ProductTitleUI from '@/components/ui/product/productTitle/ProductTitle';
import React from 'react';

const ProductTitle = ({
  slug,
  product,
}: {
  slug: string;
  product: IProduct;
}) => {
  return (
    <section
      className={`section_page section_title_page flex justify-between bg-[var(--container-bg-between)] p-3`}
    >
      <ProductTitleUI slug={slug} />
      <div className={`flex gap-3`}>
        <ShareButton />
        <CompareProduct product={product} />
      </div>
    </section>
  );
};

export default ProductTitle;
