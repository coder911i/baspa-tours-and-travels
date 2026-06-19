/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';
import { getStorageProvider } from '@/lib/reviews';

const ANALYTICS_KEY = 'reviews-analytics';

export async function GET(request: Request) {
  try {
    const { provider } = getStorageProvider();
    const stored = await provider.get(ANALYTICS_KEY);
    const data = stored ? JSON.parse(stored) : { writeReviewClicks: 0, whatsappClicks: 0, events: [] };
    
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventType, sourcePage } = body;
    
    if (!eventType) {
      throw new Error('Missing eventType');
    }

    const { provider } = getStorageProvider();
    const stored = await provider.get(ANALYTICS_KEY);
    const data = stored ? JSON.parse(stored) : { writeReviewClicks: 0, whatsappClicks: 0, events: [] };

    if (eventType === 'write_review') {
      data.writeReviewClicks++;
    } else if (eventType === 'whatsapp_chat') {
      data.whatsappClicks++;
    }

    // Add recent event details
    data.events.unshift({
      timestamp: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
      eventType,
      sourcePage: sourcePage || 'unknown',
    });

    // Limit log details to last 50 events
    if (data.events.length > 50) {
      data.events.pop();
    }

    await provider.set(ANALYTICS_KEY, JSON.stringify(data));
    
    return NextResponse.json({ success: true, count: eventType === 'write_review' ? data.writeReviewClicks : data.whatsappClicks });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
