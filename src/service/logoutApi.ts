import { makeApiCall } from './apiServiceData/makeCallApi';

export const logoutApi = async (): Promise<IApiResponse<null> | null> => {
  return makeApiCall<null>({ endpoint: 'auth/logout', method: 'POST' });
};
