import { API_SERVER } from '@/constants/apiConstants';
import { getToken } from '../getToken';

export async function apiService<T>(
  endpoint: string,
  method: string,
  params?: string,
  bodyData?: {}
): Promise<IApiResponse<T> | null> {
  try {
    const token = await getToken();

    const url = `${API_SERVER}/api/${endpoint}${!params ? '' : `/${params}`}`;

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include',
      body: bodyData ? JSON.stringify(bodyData) : undefined,
    });

    if (!response.ok) {
      console.log(
        `Request failed with status ${response.status}: ${response.statusText}`
      );
      return null; // Return null if the response is not OK
    }

    return await response.json();
  } catch (error) {
    console.error(`Error in API service: ${error}`);
    return null; // Return null in case of an error
  }
}
