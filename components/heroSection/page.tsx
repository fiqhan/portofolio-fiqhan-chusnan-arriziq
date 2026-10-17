import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-28 sm:pt-32 pb-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/80 dark:border-slate-800/80 rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-[0_10px_40px_rgb(0,0,0,0.03)] relative overflow-hidden transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sisi Kiri - Deskripsi Utama */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/60 dark:bg-slate-800/80 border border-slate-300/40 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-slate-500 dark:bg-slate-400" />
              <span>Assalamu&apos;alaikum Warahmatullahi Wabarakatuh</span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Fiqhan Chusnan Arriziq
              </h1>
              <h2 className="text-2xl sm:text-3xl font-medium text-slate-600 dark:text-slate-400">
                Pengembang Web dan Aplikasi
              </h2>
            </div>

            {/* Deskripsi */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
              Saya adalah seorang pengembang aplikasi mobile dan AR (Augmented
              Reality) yang fokus pada pembuatan produk digital interaktif.
              Sebagai mahasiswa Universitas Sains Al-Qur&apos;an Jawa Tengah
              (UNSIQ) dan Lead Developer DiengVibe, saya mengombinasikan
              keahlian di bidang Web Development, Mobile App, UI/UX Design,
              serta Cybersecurity untuk menciptakan pengalaman pengguna yang
              imersif, aman, cepat, dan modern.
            </p>

            {/* Buttons Action */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#4c586e] hover:bg-[#3b4557] dark:bg-slate-700 dark:hover:bg-slate-600 text-white px-6 py-3 rounded-2xl text-sm font-medium transition-all shadow-md active:scale-95"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Pekerjakan Saya &rarr;</span>
              </Link>

              <Link
                href="#projects"
                className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 px-6 py-3 rounded-2xl text-sm font-medium transition-all shadow-2xs hover:shadow-xs active:scale-95"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span>Lihat Proyek</span>
              </Link>

              {/* Tambahan Tombol GitHub */}
              <a
                href="https://github.com/fiqhan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white px-5 py-3 rounded-2xl text-sm font-medium transition-all shadow-sm active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Sisi Kanan - Container Foto & Stat Card */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* Image Box */}
            <div className="relative w-full max-w-md aspect-4/5 rounded-3xl overflow-hidden bg-slate-200/80 dark:bg-slate-800 border border-white/80 dark:border-slate-700 shadow-inner">
              <Image
                src="/profile-photo.webp"
                alt="Fiqhan Chusnan Arriziq"
                fill
                sizes="w-full h-full"
                className="object-cover object-center"
                loading="eager"
              />

              {/* Floating Quote Card */}
              <div className="absolute top-4 right-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-white/90 dark:border-slate-700 rounded-2xl p-3 shadow-md text-xs max-w-[140px]">
                <p className="font-semibold text-slate-800 dark:text-white leading-snug">
                  Bangun Pengalaman Digital yang Bermakna
                </p>
                <span className="inline-block mt-1 text-slate-400 dark:text-slate-500">
                  <svg
                    xmlns="http://w3.org"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Bottom Statistics Glass Bar */}
            <div className="w-full mt-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/80 dark:border-slate-800/80 rounded-2xl p-4 shadow-sm grid grid-cols-3 gap-2 text-center">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  3+
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  Tahun Pengalaman
                </p>
              </div>
              <div className="border-x border-slate-200/60 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  10+
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  Proyek yang Selesai
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  5+
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  Klien yang Puas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
