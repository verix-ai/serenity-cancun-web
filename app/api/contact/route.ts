import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Basic validation
        if (!body.firstName || !body.email || !body.condoType) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const webhookUrl = process.env.GHL_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error('GHL_WEBHOOK_URL is not set in environment variables');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Forward to GHL Webhook
        const ghlResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // Pass along all data including tags and source
            body: JSON.stringify({
                ...body,
                source: 'website-inquiry',
                tags: ['website-inquiry', 'serenity-condos']
            }),
        });

        if (!ghlResponse.ok) {
            console.error('Failed to send to GHL webhook', await ghlResponse.text());
            return NextResponse.json(
                { error: 'Failed to process inquiry' },
                { status: 502 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Inquiry received successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('API Contact Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
