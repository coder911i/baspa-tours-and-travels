import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { passcode } = await request.json();
    const expectedPasscode = process.env.ADMIN_PASSCODE || 'Baspa2026';

    if (passcode === expectedPasscode) {
      const response = NextResponse.json({ success: true, message: 'Logged in successfully' });
      
      // Set an HTTP-only cookie
      response.cookies.set('baspa_admin_token', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 86400, // 24 hours
        path: '/',
      });

      return response;
    }

    return NextResponse.json({ success: false, message: 'Incorrect passcode' }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  // Check if session is already active
  const cookie = request.headers.get('cookie') || '';
  const isLoggedIn = cookie.includes('baspa_admin_token=authenticated');
  
  return NextResponse.json({ isLoggedIn });
}

export async function DELETE() {
  // Logout
  const response = NextResponse.json({ success: true, message: 'Logged out successfully' });
  response.cookies.set('baspa_admin_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0, // Expire immediately
    path: '/',
  });
  return response;
}
