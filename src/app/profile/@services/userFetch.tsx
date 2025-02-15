import { userApi } from '@/service/userApi';

const userFetch = async () => {
  const user = await userApi();
  return user;
};

export default userFetch;
