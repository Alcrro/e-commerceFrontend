import ButtonLink from '@/components/ui/buttons/defaultButton/Button';
import AddToCartAction from '@/service/serverAction/AddToCartAction';
import { ICartProductList } from '@/types/CartProductList';
import React from 'react';
import style from './addToCart.module.scss';

const AddToCartForm = ({
  action,
  product,
  icon,
  isInCart,
}: {
  action: 'addToCart';
  product: IProduct;
  icon?: boolean;
  isInCart: ICartProductList[];
}) => {
  return (
    <form action={AddToCartAction}>
      <input type="number" name="price" defaultValue={product.price} hidden />
      <input type="string" name="productId" defaultValue={product._id} hidden />

      {!icon ? (
        <ButtonLink
          label={`Add to cart ${isInCart.length === 0 ? '' : `(${isInCart.length})`}`}
          usedForm={true}
          ariaLabel="product"
          variant="primary"
          classname="py-1"
        />
      ) : (
        <ButtonLink
          variant="primary"
          label=""
          ariaLabel="product"
          icon={
            <span
              className={`${style.add_to_cart_icon} ${!isInCart ? style.isInCart : style.isNotInCart} `}
            ></span>
          }
        />
      )}
    </form>
  );
};

export default AddToCartForm;
