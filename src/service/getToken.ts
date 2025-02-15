import { cookies } from 'next/headers';

export async function getToken() {
  let token: string | undefined;

  if (typeof window === 'undefined') {
    // Server-side: Use Next.js cookies() utility
    const cookieStore = cookies();
    token = (await cookieStore).get('authToken')?.value;
  }
  if (!token) {
    console.log('Token not found.');
    return null;
  }

  return token;
}
