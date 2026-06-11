import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const required = ['fullName', 'phone', 'tourName', 'departureDate', 'adults'];
    const missing = required.filter(field => !body[field]);
    
    if (missing.length > 0) {
      return NextResponse.json(
        { success: false, error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      );
    }
    
    // Email format validation (only if provided)
    if (body.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email)) {
        return NextResponse.json(
          { success: false, error: 'Invalid email format' },
          { status: 400 }
        );
      }
    }
    
    // Phone validation (Indian numbers)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = body.phone.replace(/[\s\-\+]/g, '').replace(/^91/, '');
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number. Enter 10-digit Indian mobile number.' },
        { status: 400 }
      );
    }
    
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      console.error('GOOGLE_SCRIPT_URL not configured');
      return NextResponse.json(
        { success: false, error: 'Booking service temporarily unavailable' },
        { status: 500 }
      );
    }
    
    // Get approximate IP for spam tracking
    const ip = request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'Unknown';
    
    // Forward to Google Apps Script
    const payload = {
      ...body,
      phone: cleanPhone,
      ipAddress: ip.split(',')[0].trim(), // first IP if multiple
    };
    
    const scriptResponse = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      // 10 second timeout
      signal: AbortSignal.timeout(10000),
    });
    
    if (!scriptResponse.ok) {
      throw new Error(`Script responded with status ${scriptResponse.status}`);
    }
    
    const result = await scriptResponse.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Script processing failed');
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Booking submitted successfully! Hum jald aapse contact karenge.' 
    });
    
  } catch (error) {
    console.error('Booking API error:', error);
    
    // Don't expose internal errors to client
    return NextResponse.json(
      { 
        success: false, 
        error: 'Booking submit nahi ho saka. Please WhatsApp karo ya phone karo.' 
      },
      { status: 500 }
    );
  }
}

// Reject non-POST requests
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
