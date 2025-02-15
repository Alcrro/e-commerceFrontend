import { Order } from '@/types/Order';
import { apiService } from './apiServiceData/apiService';

export const getOrdersApi = async (
  status: string,
  data: string
): Promise<IApiResponse<Order[]> | null> => {
  const result = await apiService<Order[]>(
    'order/get-byStatus-order',
    'GET',
    `${status}/${data}`
  );

  if (result) {
    return result;
  } else {
    console.log('Something is Wrong');

    return null;
  }
};
