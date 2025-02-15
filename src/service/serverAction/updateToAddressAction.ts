'use server';

import { revalidatePath } from 'next/cache';
import { updateAddressApi } from '../addressApi';

const updateProfileAddressAction = async (
  prevState: any,
  formData: FormData
) => {
  const keys = [
    '_id',
    'fullName',
    'phoneCode',
    'phoneNoWIthoutPC',
    'addressLine1',
    'addressLine2',
    'city',
    'state',
    'postalCode',
    'country',
    'isDefault',
  ];

  // Extract all values from formData
  const formDataValues = keys.reduce((acc, key) => {
    acc[key] = formData.get(key)?.toString() || '' || Boolean; // Handle null case and ensure string return
    return acc;
  }, {} as any);

  await updateAddressApi(formDataValues);

  revalidatePath('/profile/address/edit-address');

  return {
    success: true,
    message: `Updated successfully`,
  };
};

export default updateProfileAddressAction;
