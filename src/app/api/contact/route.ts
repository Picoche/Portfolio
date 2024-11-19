import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations/contact'
import ContactEmail from '@/emails/contact-form'

const resend = new Resend('api-key-here')

export async function POST (req: Request) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = contactFormSchema.parse(body)

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York'
    })

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['your-email@example.com'], // Replace with your email
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email,
      react: ContactEmail({
        name,
        email,
        subject,
        message,
        timestamp
      })
    })

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
