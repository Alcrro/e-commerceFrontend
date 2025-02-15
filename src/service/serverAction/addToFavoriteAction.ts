'use server';
import { revalidatePath } from 'next/cache';
import { addToFavoriteApi } from '../favoriteApi';

const AddToFavoriteAction = async (formData: FormData) => {
  const productId = formData.get('productId');
  const price = formData.get('price');
  const result = await addToFavoriteApi(productId, price);

  if (!result) {
    console.log('something is wrong');
  }
  revalidatePath('/products');
};

export default AddToFavoriteAction;
