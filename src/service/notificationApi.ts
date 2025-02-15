import { apiService } from './apiServiceData/apiService';

export interface INotification {
  _id: string;
  userId: string;
  titleNotification: string;
  message: string;
  category: string;
  priority: string;
  createdAt: Date;
  expirationDate: Date;
  __v: 0;
}

export async function fetchNotificationAPI(): Promise<IApiResponse<
  INotification[]
> | null> {
  const result = await apiService<INotification[]>(
    'notification/get-notification',
    'GET'
  );

  if (result) {
    return result;
  } else {
    console.log('error');
    return null;
  }
}
export async function fetchNotificationByIdAPI(
  notificationId: string
): Promise<IApiResponse<INotification> | null> {
  const result = await apiService<INotification>(
    `notification/get-notification`,
    'GET',
    notificationId
  );

  if (result) {
    return result;
  } else {
    console.log('error');
    return null;
  }
}
