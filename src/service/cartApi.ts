import { apiService } from './apiServiceData/apiService';

export const cartApi = async (): Promise<IApiResponse<ICartData> | null> => {
  const result = await apiService<ICartData>('cart/get-cart', 'GET');

  if (result) {
    return result;
  } else {
    console.log('something is wrong');
    return null;
  }
};
export const addToCartApi = async (
  productId: FormDataEntryValue | null,
  price: FormDataEntryValue | null
): Promise<IApiResponse<ICartData> | null> => {
  const result = await apiService<ICartData>('cart/create-cart', 'POST', '', {
    productId,
    price,
  });

  if (result) {
    return result;
  } else {
    console.log('something is wrong');
    return null;
  }
};

export const deleteProductCartApi = async (
  productId: string
): Promise<IApiResponse<ICartData> | null> => {
  const result = await apiService<ICartData>(
    'cart/delete-product-cart',
    'DELETE',
    '',
    { productId }
  );

  if (result) {
    return result;
  } else {
    console.log('something is wrong');
    return null;
  }
};
