import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const token = (await cookies()).get('authToken')?.value || null;

    return NextResponse.json({ token });
  } catch (error) {
    NextResponse.json({ message: error });
  }
}
