'use server';

import { getOrdersApi } from '../ordersApi';

export const getOrderAction = async (prevState: any, formData: FormData) => {
  const status = formData.get('status') as string;
  const timeStamp = formData.get('timeStamp') as string;

  await getOrdersApi(status, timeStamp);
};
