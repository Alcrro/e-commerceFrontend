// app/components/ui/DeleteFromCart.tsx
import ButtonLink from '@/components/ui/buttons/defaultButton/Button';
import deleteProductCartAction from '@/service/serverAction/deleteProductCartAction';
import style from './deleteFromCart.module.scss';
interface DeleteFromCartProps {
  productId: string;
}

const DeleteFromCart = ({ productId }: DeleteFromCartProps) => {
  return (
    <div className={style.delete_from_cart}>
      <form action={deleteProductCartAction}>
        <input
          type="text"
          name="deleteProduct"
          defaultValue={productId}
          hidden
        />
        <ButtonLink
          usedForm={true}
          label="Delete"
          variant="none"
          ariaLabel="delete"
        />
      </form>
    </div>
  );
};

export default DeleteFromCart;
