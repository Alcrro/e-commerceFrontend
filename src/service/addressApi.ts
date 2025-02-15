import { apiService } from './apiServiceData/apiService';

export interface IAddressList {
  _id: string;
  userId: string;
  fullName: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export const getAddressApi = async (): Promise<IApiResponse<
  IAddressList[]
> | null> => {
  const result = await apiService<IAddressList[]>('address/get-address', 'GET');

  if (result) {
    return result;
  } else {
    console.log('something is wrong'!);
    return null;
  }
};
export interface INewAddressList extends Omit<IAddressList, 'phoneNumber'> {
  phoneCode: string;
  phoneNoWIthoutPC: string;
}
// Modify IAddress to specify that `data` is an object, not an array
export type IAddressWithObjectData = Omit<INewAddressList, 'data'> & {
  data: INewAddressList; // Modify `data` to be an object
};
export const getByIdAddressApi = async (
  id: string
): Promise<IApiResponse<IAddressList> | null> => {
  const result = await apiService<IAddressList>(
    `address/get-address`,
    'GET',
    id
  );
  if (result) {
    return result;
  } else {
    console.log('something is wrong');
    return null;
  }
};
export interface IUpdateAddress {
  success: boolean;
  message: string;
  data: INewAddressList[];
}
export const updateAddressApi = async (
  ...args: (INewAddressList | null | undefined)[]
): Promise<IApiResponse<INewAddressList[]> | null> => {
  // Since args is an array, access the first element directly
  const address = args[0];

  if (!address) {
    console.log('Invalid address data');
    return null;
  }

  // Use address._id and the rest of the data
  const { _id, ...updateArgs } = address; // Destructure to get _id and the rest of the address fields

  const result = await apiService<INewAddressList[]>(
    'address/update-address',
    'PATCH',
    _id, // Pass the _id directly
    updateArgs // Pass the rest of the update data
  );

  if (result) {
    return result;
  } else {
    console.log('Something is wrong');
    return null;
  }
};

export const setDefaultAddressApi = async (
  userId: string,
  addressId: string
) => {
  const result = await apiService(
    'address/update-default-address',
    'PATCH',
    userId,
    { _id: addressId }
  );

  if (result) {
    return result;
  } else {
    console.log('Something is wrong');
    return null;
  }
};
