import React from 'react';
import style from './productCardList.module.scss';
import ProductPrice from './productPrice/ProductPrice';
import ProductImage from './productImage/ProductImage';
import ProductDescription from './productDescription/ProductDescription';
import ProductSubtotal from './productSubtotal/ProductSubtotal';
import ProductVendor from './productVendor/ProductVendor';

const ProductCardList = ({
  productCartList,
}: {
  productCartList: ICartData | null;
}) => {
  if (!productCartList) {
    return <div>No products in list</div>;
  }

  return (
    <div className={style.product_container}>
      {productCartList.productCartList.map((product) => (
        <div key={product.productId} className={style.product_container_inner}>
          <div className={style.header}>
            <ProductVendor product={product} />
          </div>
          <div className={style.body}>
            <div className={style.product_description_container}>
              <ProductImage product={product} />
              <ProductDescription product={product} />
              <ProductPrice product={product} />
            </div>
          </div>
          <div className={style.footer}>
            <ProductSubtotal product={product} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCardList;
