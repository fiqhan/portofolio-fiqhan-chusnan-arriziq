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

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Token Turnstile tidak ditemukan." },
        { status: 400 },
      );
    }

    // Verifikasi token ke Cloudflare
    const secretKey = process.env.CLOUDFRALE_TURNSTILE_SECRET_KEY;
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: secretKey,
          response: token,
        }),
      },
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return NextResponse.json(
        { success: false, message: "Verifikasi Turnstile gagal oleh server." },
        { status: 403 },
      );
    }

    // Lanjutkan pengiriman email via Resend jika verifikasi berhasil
    const emailData = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Ganti dengan domain terverifikasi Anda jika ada
      to: ["arriziqfiqhan@gmail.com"],
      subject: `Pesan Baru dari Portofolio: ${subject}`,
      text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
    });

    return NextResponse.json({ success: true, data: emailData });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan pada server." },
      { status: 500 },
    );
  }
}
