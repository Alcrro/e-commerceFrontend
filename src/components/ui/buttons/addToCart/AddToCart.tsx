import React from 'react';
import ButtonLink from '../defaultButton/Button';
import AddToCartAction from '@/service/serverAction/AddToCartAction';
import { cartApi } from '@/service/cartApi';
import style from './addToCart.module.scss';
const AddToCart = async ({
  action,
  product,
  icon,
}: {
  action: 'addToCart';
  product: IProduct;
  icon?: boolean;
}) => {
  // console.log(products);

  const cart = await cartApi();

  const productCardLength = !cart?.data?.productCartList
    ? []
    : cart?.data?.productCartList;
  const itemsCount = productCardLength.filter(
    (filter: ICartProductList) => filter.productId === product._id
  );

  return (
    <form action={AddToCartAction}>
      <input type="number" name="price" defaultValue={product.price} hidden />
      <input type="string" name="productId" defaultValue={product._id} hidden />

      {!icon ? (
        <ButtonLink
          label={`Add to cart ${itemsCount.length === 0 ? '' : `(${itemsCount.length})`}`}
          usedForm={true}
          ariaLabel="product"
          variant="primary"
          classname="py-1 w-full"
        />
      ) : (
        <ButtonLink
          variant="primary"
          label=""
          ariaLabel="product"
          icon={<span className={style.add_to_cart_icon}></span>}
        />
      )}
    </form>
  );
};

export default AddToCart;
