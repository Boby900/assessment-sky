import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server'; // Import NextRequest and NextResponse

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) { // Specify NextRequest type
  try {
    const body = await req.json();
    const { email } = body; // Get email from request body

    const { data, error } = await resend.emails.send({
      from: 'Sunshine <onboarding@resend.dev>',
      to: [email],
      subject: 'Hello from the sunshine💀',
      react: EmailTemplate({ firstName: email }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 }); // Use NextResponse.json
    }

    return NextResponse.json(data); // Use NextResponse.json
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 }); // Use NextResponse.json
  }
}