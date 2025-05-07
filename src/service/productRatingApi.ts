import { apiService } from './apiServiceData/apiService';

export const getProductRatingApi = async (
  productId: string
): Promise<IApiResponse<IProductRating[]> | null> => {
  const result = await apiService<IProductRating[]>({
    endpoint: 'rating/get-rating-by-productId',
    method: 'GET',
    params: `/${productId}`,
  });

  if (result) {
    return result;
  } else {
    console.log('Something is Wrong');

    return null;
  }
};
