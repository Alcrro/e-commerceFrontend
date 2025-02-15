import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { API_SERVER } from './constants/apiConstants';

// Protect routes requiring authentication
export async function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken');

  // Redirect to login page if token is not present for protected routes
  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }
  // Asynchronously validate the token with an external API
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

  return NextResponse.next();
}

// Match protected routes
export const config = {
  matcher: '/profile/:path*', // Adjust to your protected routes
};
