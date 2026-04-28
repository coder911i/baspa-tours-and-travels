import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simulate booking process
    console.log('New Booking Request:', body);
    
    return NextResponse.json({ 
      success: true, 
      bookingReference: 'BT-' + Math.random().toString(36).substring(2, 9).toUpperCase()
    });
  } catch {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to process booking' 
    }, { status: 500 });
  }
}
