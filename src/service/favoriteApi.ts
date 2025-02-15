import { apiService } from './apiServiceData/apiService';

export const favoriteApi = async (
  listName: string
): Promise<IApiResponse<ICartData> | null> => {
  const result = await apiService<ICartData>(
    'favorite/get-favorite',
    'GET',
    listName
  );

  if (result) {
    return result;
  } else {
    console.log('problem');
    return null;
  }
};
export const addToFavoriteApi = async (
  productId: FormDataEntryValue | null,
  price: FormDataEntryValue | null
): Promise<IApiResponse<ICartData> | null> => {
  const result = await apiService<ICartData>(
    'favorite/add-favorite',
    'POST',
    '',
    { productId, price }
  );

  if (result) {
    return result;
  } else {
    console.log('problem');
    return null;
  }
};
