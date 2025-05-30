import { getToken } from '@/service/getToken';
import { NextRequest, NextResponse } from 'next/server';
import React from 'react';

const handleAuthMiddleware = async (
  req: NextRequest,
  requestHeaders: Headers
) => {
  const token = await getToken();

  // If user has a token, redirect them away from /auth/login (e.g., to home)
  if (token) {
    return NextResponse.redirect(new URL('/', req.url)); // or /profile
  }

  // If no token, allow the login page to load
  return NextResponse.next({ headers: requestHeaders });
};

export default handleAuthMiddleware;
