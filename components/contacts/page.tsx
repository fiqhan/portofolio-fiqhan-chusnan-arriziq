"use client";

import { Mail, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement | string,
        options: {
          sitekey: string;
          theme?: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => string;
      remove: (widgetId: string) => void;
    };
  }
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const siteKeyString = "0x4AAAAAAFZbySlok0J3eSpR";
    const scriptId = "cloudflare-turnstile-script";

    const renderWidget = () => {
      if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
        try {
          widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
            sitekey: siteKeyString,
            theme: "auto",
            callback: (token: string) => {
              setTurnstileToken(token);
            },
            "expired-callback": () => {
              setTurnstileToken("");
            },
            "error-callback": () => {
              setTurnstileToken("");
            },
          });
        } catch (err) {
          console.error("Gagal merender Turnstile:", err);
        }
      }
    };

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = renderWidget;
      document.body.appendChild(script);
    } else {
      renderWidget();
    }

    return () => {
      // Bersihkan widget saat komponen di-unmount untuk mencegah duplikasi
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        } catch {
          // Abaikan jika gagal membersihkan
        }
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!turnstileToken) {
      alert(
        "Harap selesaikan verifikasi Cloudflare Turnstile terlebih dahulu.",
      );
      return;
    }

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      "cf-turnstile-response": turnstileToken,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        alert(result.message || "Gagal mengirim pesan.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan jaringan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/80 dark:border-slate-800/80 rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-[0_10px_40px_rgb(0,0,0,0.03)] transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Informasi Kontak (Kiri) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/60 dark:bg-slate-800/80 border border-slate-300/40 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300">
                Hubungi Kami
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Mari Bekerja Sama <br />
                <span className="text-slate-600 dark:text-slate-400 font-medium">
                  atau Sekadar Menyapa
                </span>
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Tertarik untuk berkolaborasi dalam proyek aplikasi mobile,
                Augmented Reality, pengembangan web, atau konsultasi UI/UX?
                Silakan hubungi saya melalui formulir ini atau media sosial.
              </p>
            </div>

            {/* Detail Kontak Langsung */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 text-xs">
                <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-400 dark:text-slate-400 text-[10px] font-medium">
                    Email
                  </p>
                  <a
                    href="mailto:arriziqfiqhan@gmail.com"
                    className="font-semibold text-slate-800 dark:text-white hover:underline"
                  >
                    arriziqfiqhan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 text-xs">
                <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-400 dark:text-slate-400 text-[10px] font-medium">
                    Lokasi
                  </p>
                  <p className="font-semibold text-slate-800 dark:text-white">
                    Wonosobo, Jawa Tengah, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Pesan (Kanan) */}
          <div className="lg:col-span-7 bg-white/50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 rounded-3xl p-6 sm:p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-3">
                <span className="text-4xl">✓</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Pesan Terkirim!
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
                  Terima kasih telah menghubungi. Pesan telah diteruskan ke
                  email saya dan saya akan membalasnya sesegera mungkin.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      placeholder="Nama Anda"
                      className="w-full text-xs px-4 py-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700 focus:outline-none focus:border-slate-400 dark:focus:border-slate-500 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      placeholder="email@domain.com"
                      className="w-full text-xs px-4 py-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700 focus:outline-none focus:border-slate-400 dark:focus:border-slate-500 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    autoComplete="subject"
                    required
                    placeholder="Judul / Topik Pesan"
                    className="w-full text-xs px-4 py-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700 focus:outline-none focus:border-slate-400 dark:focus:border-slate-500 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    id="message"
                    name="message"
                    autoComplete="message"
                    required
                    placeholder="Tuliskan pesan atau detail proyek Anda di sini..."
                    className="w-full text-xs px-4 py-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700 focus:outline-none focus:border-slate-400 dark:focus:border-slate-500 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 resize-none"
                  />
                </div>

                {/* Container Turnstile dengan Ref */}
                <div
                  ref={turnstileRef}
                  className="cf-turnstile my-3"
                  data-theme="auto"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 bg-[#4c586e] hover:bg-[#3b4557] dark:bg-slate-700 dark:hover:bg-slate-600 text-white text-xs font-semibold rounded-xl transition-all shadow-md active:scale-[0.99] disabled:opacity-50"
                >
                  {loading ? "MENGIRIM PESAN..." : "Kirim Pesan →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
