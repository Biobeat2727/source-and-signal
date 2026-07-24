import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const MAX_LENGTHS = {
  name: 100,
  email: 200,
  business: 150,
  website: 200,
  message: 5000,
} as const

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function cleanField(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  if (trimmed.length > maxLength) return null
  return trimmed
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Honeypot: bots fill every field. Pretend success and send nothing.
    if (typeof body.company_website === 'string' && body.company_website.trim() !== '') {
      return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
    }

    const name = cleanField(body.name, MAX_LENGTHS.name)
    const email = cleanField(body.email, MAX_LENGTHS.email)
    const business = cleanField(body.business, MAX_LENGTHS.business)
    const website = cleanField(body.website, MAX_LENGTHS.website) ?? ''
    const message = cleanField(body.message, MAX_LENGTHS.message)

    if (!name || !email || !business || !message) {
      return NextResponse.json(
        { error: 'Name, email, business name, and message are required' },
        { status: 400 }
      )
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      business: escapeHtml(business),
      website: escapeHtml(website),
      message: escapeHtml(message).replace(/\n/g, '<br>'),
    }

    await resend.emails.send({
      from: 'contact@sourceandsignal.dev',
      to: 'davey@sourceandsignal.dev',
      replyTo: email,
      subject: `Website inquiry from ${name} (${business})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #60a5fa; border-bottom: 2px solid #60a5fa; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${safe.name}</p>
            <p><strong>Email:</strong> ${safe.email}</p>
            <p><strong>Business:</strong> ${safe.business}</p>
            ${safe.website ? `<p><strong>Current website:</strong> ${safe.website}</p>` : ''}
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-left: 4px solid #60a5fa; margin-top: 10px;">
              ${safe.message}
            </div>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            Sent from <strong>Source &amp; Signal</strong> contact form<br>
            <a href="https://sourceandsignal.dev" style="color: #60a5fa;">sourceandsignal.dev</a>
          </p>
        </div>
      `,
    })

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
