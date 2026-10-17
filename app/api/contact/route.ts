import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      subject,
      message,
      "cf-turnstile-response": token,
    } = body;

    // 0. Validasi Turnstile Token (Siteverify)
    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Verifikasi Cloudflare Turnstile diperlukan.",
        },
        { status: 400 },
      );
    }

    const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: secretKey,
          response: token,
        }),
      },
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return NextResponse.json(
        { success: false, message: "Verifikasi bot gagal. Silakan coba lagi." },
        { status: 403 },
      );
    }

    // 1. Validasi Input Kosong
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Semua kolom wajib diisi." },
        { status: 400 },
      );
    }

    // 2. Validasi Format Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Format email tidak valid." },
        { status: 400 },
      );
    }

    // 3. Sanitasi Input (XSS Prevention)
    const sanitizeInput = (str: string) => {
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
    };

    const cleanName = sanitizeInput(name);
    const cleanSubject = sanitizeInput(subject);
    const cleanMessage = sanitizeInput(message);

    // 4. Kirim Email via Resend
    const data = await resend.emails.send({
      from: "Portofolio Contact <onboarding@resend.dev>",
      to: ["arriziqfiqhan@gmail.com"],
      replyTo: email,
      subject: `[Portofolio] ${cleanSubject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>Pesan Baru dari Form Portofolio</h2>
          <p><strong>Pengirim:</strong> ${cleanName} (${email})</p>
          <p><strong>Subjek:</strong> ${cleanSubject}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Pesan:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px;">${cleanMessage}</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Pesan berhasil terkirim!", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error API Contact:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Gagal mengirim email. Silakan coba lagi nanti.",
      },
      { status: 500 },
    );
  }
}
