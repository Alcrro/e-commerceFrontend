'use server';

import { revalidatePath } from 'next/cache';
import { serverServices } from '@/service/serverAction/serverServices'; // Your backend logic

const revalidateMap: Record<string, string[]> = {
  addToCart: ['/cart'],
  addToFavorite: ['/favorite', '/products'], // Multiple paths
  deleteProductCart: ['/cart', '/products'],
  getOrder: ['/orders'],
  updateAddress: ['/profile/address/edit-address'],
  deleteToFavoriteCart: ['/products', '/favorite'],
  updateNotification: ['/profile/notification'],
  deleteNotification: ['/profile/notification'],
  updateAllViewedNotification: ['/profile/notification'],
  deleteAllViewedNotification: ['/profile/notification'],
};

export const parseFormData = async (formData: FormData) => {
  const data: Record<string, any> = {};

  formData.forEach((value, key) => {
    if (value === 'true' || value === 'false') {
      data[key] = value === 'true';
    } else if (!isNaN(Number(value))) {
      data[key] = Number(value);
    } else {
      data[key] = value.toString();
    }
  });

  return data;
};

export const handleActionState = async (
  action: keyof typeof serverServices,
  prevState: any,
  formData: FormData
) => {
  if (!serverServices[action]) {
    return { success: false, message: `Invalid action: ${action}` };
  }

  try {
    const dataForm = await parseFormData(formData);
    const responseData = await serverServices[action](dataForm);

    if (revalidateMap[action]) {
      console.log(`Revalidating paths for ${action}:`, revalidateMap[action]);
      revalidateMap[action].forEach((path) => revalidatePath(path));
    }

    return {
      success: true,
      message: 'Successfully updated',
      data: responseData,
    };
  } catch (error) {
    console.error(`Error executing ${action}:`, error);
    return { success: false, message: `Failed to process ${action}` };
  }
};
