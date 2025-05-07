'use server';

import { handleActionState } from '@/service/serverAction/createServerAction';

export async function updateNotificationAction(formData: FormData) {
  await handleActionState('updateNotification', {}, formData);

}
