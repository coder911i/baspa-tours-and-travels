import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simulate DB save or email sending
    console.log('New Contact Submission:', body);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Message received successfully' 
    });
  } catch {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to process message' 
    }, { status: 500 });
  }
}
