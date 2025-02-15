'use server';

import { revalidatePath } from 'next/cache';
import { deleteProductCartApi } from '../cartApi';

const deleteProductCartAction = async (formData: FormData) => {
  const productId = formData.get('deleteProduct') as string;

  await deleteProductCartApi(productId);

  revalidatePath('/profile/cart');
};

export default deleteProductCartAction;
