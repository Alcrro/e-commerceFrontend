import { API_SERVER } from '@/constants/apiConstants';
import { NextRequest, NextResponse } from 'next/server';

// Middleware logic for /profile routes
export async function handleProfileMiddleware(
  req: NextRequest,
  requestHeaders: Headers
) {
  const token = req.cookies.get('authToken');

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  const response = await fetch(`${API_SERVER}/api/auth/validate`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
    credentials: 'include',
  });

  if (!response.ok) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  return NextResponse.next({ headers: requestHeaders });
}
