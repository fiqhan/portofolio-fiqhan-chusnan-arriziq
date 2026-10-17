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

    // 1. Validasi keberadaan token Turnstile
    if (!token) {
      return NextResponse.json(
        { success: false, message: "Token Turnstile tidak ditemukan." },
        { status: 400 },
      );
    }

    // 2. Verifikasi token ke server Cloudflare Turnstile
    const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
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
        { success: false, message: "Verifikasi Cloudflare Turnstile gagal." },
        { status: 403 },
      );
    }

    // 3. Kirim Email melalui Resend
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["arriziqfiqhan@gmail.com"],
      subject: `Pesan Baru dari Portofolio: ${subject}`,
      text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
    });

    // 4. Kirim Notifikasi Instan ke Telegram
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      const telegramMessage =
        `📬 *Pesan Baru dari Portofolio*\n\n` +
        `👤 *Nama:* ${name}\n` +
        `📧 *Email:* ${email}\n` +
        `📌 *Subjek:* ${subject}\n\n` +
        `💬 *Pesan:*\n${message}`;

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: "Markdown",
        }),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Pesan berhasil dikirim.",
    });
  } catch (error) {
    console.error("API Contact Error:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan pada server." },
      { status: 500 },
    );
  }
}
