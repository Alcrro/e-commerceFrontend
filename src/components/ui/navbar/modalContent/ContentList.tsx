'use client';
import React, { useActionState, useEffect } from 'react';
import ContentName from './ContentName';
import ContentPrice from './ContentPrice';
import ButtonLink from '../../buttons/defaultButton/Button';
import style from './contentList.module.scss';
import { handleActionState } from '@/service/serverAction/createServerAction';
import { useRouter } from 'next/navigation';
import { useFavoriteStore } from '@/store/useFavoriteStore';

const ContentList = ({
  product,
  action,
}: {
  product: ICartProductList;
  action: ServerAction;
}) => {
  const router = useRouter();
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite); // ✅ Zustand function

  const [state, formAction, pending] = useActionState(
    async (prevState: any, formData: FormData) => {
      const productId = formData.get('productId') as string;
      console.log('🚀 Deleting product with ID:', productId);

      // Step 1: Remove from Database
      const result = await handleActionState(action, prevState, formData);

      if (result.success) {
        // Step 2: Remove from Zustand (which syncs with localStorage)
      }

      return {
        ...prevState,
        success: result.success,
        message: result.message,
        data: result.data,
      };
    },
    { success: false, message: '', data: null }
  );

  useEffect(() => {
    if (state.success) {
      removeFavorite(product.productDetails._id);
      console.log('✅ Product deleted successfully! Refreshing...');
      router.refresh(); // 🔥 Update UI after deletion
    }
  }, [product.productDetails._id, removeFavorite, state.success, router]);

  return (
    <div className={`flex justify-between ${style.product_content}`}>
      <ContentName name={product?.productDetails.name} />
      <div className={style.aux_container}>
        <ContentPrice price={product?.productDetails.price} />
        <div className={style.delete_btn_container}>
          <form action={formAction}>
            <input
              type="text"
              defaultValue={product.productDetails._id}
              name="productId"
              hidden
            />
            <ButtonLink
              usedForm={true}
              label=""
              variant="none"
              ariaLabel="delete"
              icon={<span className={style.delete_btn}></span>}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContentList;
