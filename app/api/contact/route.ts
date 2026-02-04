import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  formType: 'contact' | 'quick-question';
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Lūdzu aizpildiet visus obligātos laukus.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Lūdzu ievadiet derīgu e-pasta adresi.' },
        { status: 400 }
      );
    }

    // Configure email transport
    // For production, use environment variables for credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Compose email
    const formTypeLabel = data.formType === 'contact' ? 'Kontaktforma' : 'Ātrais jautājums';
    const subject = `${formTypeLabel} no ${data.name} - Pulverkrāsotava.lv`;

    const htmlContent = `
      <h2>${formTypeLabel}</h2>
      <p><strong>Vārds:</strong> ${data.name}</p>
      <p><strong>E-pasts:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Tālrunis:</strong> ${data.phone}</p>` : ''}
      <p><strong>Ziņa:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p style="color: #666; font-size: 12px;">
        Šī ziņa tika nosūtīta no pulverkrasotava.lv kontaktformas.
      </p>
    `;

    const textContent = `
${formTypeLabel}

Vārds: ${data.name}
E-pasts: ${data.email}
${data.phone ? `Tālrunis: ${data.phone}` : ''}

Ziņa:
${data.message}

---
Šī ziņa tika nosūtīta no pulverkrasotava.lv kontaktformas.
    `.trim();

    // Send email
    await transporter.sendMail({
      from: `"Pulverkrāsotava Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'info@pulverkrasotava.lv',
      replyTo: data.email,
      subject,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Kļūda nosūtot ziņu. Lūdzu, mēģiniet vēlreiz vai sazinieties ar mums telefoniski.' },
      { status: 500 }
    );
  }
}
