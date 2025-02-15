'use server';
import { revalidatePath } from 'next/cache';
import { addToCartApi } from '../cartApi';

const AddToCartAction = async (formData: FormData) => {
  const productId = formData.get('productId');
  const price = formData.get('price');
  await addToCartApi(productId, price);

  revalidatePath('/products');
};

export default AddToCartAction;
