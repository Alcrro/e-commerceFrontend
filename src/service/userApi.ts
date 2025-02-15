import { apiService } from './apiServiceData/apiService';

export interface IProfile {
  username: string;
  avatarUrl: string;
  dateJoined: Date;
}

export const userApi = async (): Promise<IApiResponse<IProfile> | null> => {
  const result = await apiService<IProfile>('user/get-profile', 'GET');

  if (result) {
    return result;
  } else {
    console.log('error');
    return null;
  }
};
