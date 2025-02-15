'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { setDefaultAddressApi } from '../addressApi';

const setDefaultAddressAction = async (_prevState: any, formData: FormData) => {
  const userId = formData.get('userId') as string;
  const id = formData.get('_id') as string;

  console.log('Updating default address:', { userId, id });

  await setDefaultAddressApi(userId, id);

  // Ensure revalidation works correctly

  revalidatePath('/profile/address/success');

  console.log('Revalidation triggered');

  return { success: true, message: `Updated successfully!` };
};

export default setDefaultAddressAction;
