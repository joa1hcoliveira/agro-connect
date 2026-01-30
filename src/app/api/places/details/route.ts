import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { placeId } = body;

    const response = await fetch('https://google-map-places-new-v2.p.rapidapi.com/v1/places:details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-FieldMask': 'location',
        'x-rapidapi-host': 'google-map-places-new-v2.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY!,
      },
      body: JSON.stringify({
        placeId,
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in places details API:', error);
    return NextResponse.json({ error: 'Failed to fetch place details' }, { status: 500 });
  }
}