export default function About() {
  const services = [
    {
      icon: (
        <svg
          className="w-5 h-5 text-slate-700 dark:text-slate-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Web Development",
      desc: "Membangun aplikasi web modern, cepat, dan responsif berbasis React, Next.js, dan Tailwind CSS.",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-slate-700 dark:text-slate-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "App Development",
      desc: "Pengembangan aplikasi mobile lintas platform berbasis Flutter dengan integrasi AR yang imersif.",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-slate-700 dark:text-slate-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      title: "UI/UX Design",
      desc: "Merancang antarmuka produk digital yang berfokus pada pengalaman pengguna yang intuitif dan bersih.",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-slate-700 dark:text-slate-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Cybersecurity",
      desc: "Menerapkan praktik keamanan jaringan, analisa kerentanan sistem, dan proteksi data pada aplikasi dan web.",
    },
  ];

  return (
    <section id="about" className="py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/80 dark:border-slate-800/80 rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-[0_10px_40px_rgb(0,0,0,0.03)] transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Kolom Kiri: Informasi Pribadi & Latar Belakang */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              {/* Badge Label */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/60 dark:bg-slate-800/80 border border-slate-300/40 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300">
                Tentang Saya
              </div>

              {/* Heading Section */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Mengubah Ide <br />
                <span className="text-slate-600 dark:text-slate-400 font-medium">
                  Menjadi Solusi Digital
                </span>
              </h2>

              {/* Deskripsi Lengkap */}
              <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Halo! Saya{" "}
                  <strong className="text-slate-800 dark:text-white">
                    Fiqhan Chusnan Arriziq
                  </strong>
                  , seorang mahasiswa di{" "}
                  <strong className="text-slate-800 dark:text-white">
                    Universitas Sains Al-Qur&apos;an (UNSIQ) Jawa Tengah di
                    Wonosobo
                  </strong>
                  .
                </p>
                <p>
                  Saya memiliki ketertarikan mendalam pada pengembangan Web,
                  Mobile App (Flutter & AR), UI/UX Design, serta Cybersecurity.
                  Sebagai Lead Developer{" "}
                  <strong className="text-slate-800 dark:text-white">
                    DiengVibe
                  </strong>
                  , saya berfokus menciptakan solusi teknologi interaktif yang
                  aman, fungsional, dan memberikan pengalaman terbaik bagi
                  pengguna.
                </p>
              </div>
            </div>

            {/* Chips Informasi Kontak & Universitas */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 shadow-2xs">
                <svg
                  className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
                Mahasiswa UNSIQ
              </span>

              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 shadow-2xs">
                <svg
                  className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Wonosobo, Indonesia
              </span>

              <a
                href="mailto:arriziqfiqhan@gmail.com"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors shadow-2xs"
              >
                <svg
                  className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400"
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
                arriziqfiqhan@gmail.com
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Grid 4 Pilar Keahlian (2x2) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 hover:bg-white/80 dark:hover:bg-slate-800 hover:border-white dark:hover:border-slate-600 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col gap-3 justify-between"
              >
                <div className="w-10 h-10 rounded-2xl bg-slate-100/80 dark:bg-slate-700/80 border border-slate-200/80 dark:border-slate-600 flex items-center justify-center">
                  {srv.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-white text-sm sm:text-base mb-1">
                    {srv.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
