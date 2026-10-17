"use client";

import { useState } from "react";

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const articles = [
    {
      source: "Kompasiana",
      title: "Jelajahi Keindahan Dieng Lebih Mudah dengan Aplikasi DiengVibe",
      excerpt:
        "Liputan artikel publikasi mengenai inovasi aplikasi DiengVibe dalam mempermudah eksplorasi wisata Dieng berbasis teknologi digital.",
      date: "2025",
      url: "https://www.kompasiana.com/salsabilahasyim11/68d569baed641530aa3418f2/jelajahi-keindahan-dieng-lebih-mudah-dengan-aplikasi-diengvibe",
      fullContent:
        "Artikel di Kompasiana ini mengulas bagaimana aplikasi DiengVibe membantu wisatawan menjelajahi destinasi wisata Dieng dengan mudah, menghadirkan fitur-fitur panduan interaktif dan integrasi layanan lokal.",
    },
    {
      source: "P2MW Kemdiktisaintek",
      title: "Gerai Resmi Usaha P2MW: DiengVibe",
      excerpt:
        "Laman resmi profil produk usaha inovasi DiengVibe di portal Program Pembinaan Mahasiswa Wirausaha Kemdiktisaintek.",
      date: "2025",
      url: "https://p2mw.kemdiktisaintek.go.id/gerai/diengvibe",
      fullContent:
        "Halaman resmi gerai DiengVibe pada portal P2MW Kementerian Pendidikan Tinggi, Sains, dan Teknologi, menampilkan detail unit bisnis smart tourism berbasis Virtual Tour & Augmented Reality.",
    },
    {
      source: "FITK UNSIQ News",
      title:
        "Dua Tim P2MW UNSIQ Siap Berlaga di KMI Expo 2025 Universitas Tidar Magelang",
      excerpt:
        "Berita resmi kampus UNSIQ mengenai lolosnya tim P2MW termasuk DiengVibe untuk mewakili kampus di ajang nasional KMI Expo.",
      date: "2025",
      url: "https://fitk.unsiq.ac.id/dua-tim-p2mw-unsiq-siap-berlaga-di-kmi-expo-2025-universitas-tidar-magelang/",
      fullContent:
        "Liputan kegiatan pendampingan dan kesiapan tim P2MW UNSIQ (DiengVibe) dalam melangkah ke panggung nasional KMI Expo XVI 2025 di Universitas Tidar Magelang.",
    },
    {
      source: "Dokumen P2MW Kemdiktisaintek",
      title: "Surat Pengumuman Penerima Bantuan P2MW 2025",
      excerpt:
        "Dokumen resmi SK penetapan penerima bantuan pendanaan P2MW 2025 yang memuat nama kelompok dan usaha DiengVibe UNSIQ.",
      date: "2025",
      url: "https://p2mw.kemdiktisaintek.go.id/uploads/downloads/surat_pengumuman_penerima_bantuan_p2mw_2025_1752220005.pdf",
      fullContent:
        "Pengumuman resmi penetapan proposal usaha mahasiswa yang lolos pendanaan P2MW 2025 dari Kemdiktisaintek RI.",
    },
    {
      source: "Dokumen P2MW Kemdiktisaintek",
      title: "Surat PKP & Seleksi Peserta KMI Expo XVI 2025",
      excerpt:
        "Surat resmi pelaksanaan Penilaian Kemajuan Pelaksanaan (PKP) dan seleksi menuju ajang KMI Expo XVI 2025.",
      date: "2025",
      url: "https://p2mw.kemdiktisaintek.go.id/uploads/downloads/surat_pkp_dan_seleksi_peserta_kmi_expo_xvi_2025_1758270655.pdf",
      fullContent:
        "Dokumen panduan pelaksanaan penilaian kemajuan P2MW serta mekanisme seleksi kontingen KMI Expo XVI tahun 2025.",
    },
    {
      source: "Dokumen P2MW Kemdiktisaintek",
      title: "Surat Bimbingan Teknis (Bimtek) P2MW 2025",
      excerpt:
        "Surat undangan dan pelaksanaan Bimtek P2MW 2025 bagi tim mahasiswa penerima pendanaan.",
      date: "2025",
      url: "https://p2mw.kemdiktisaintek.go.id/uploads/downloads/surat_bimtek_p2mw_2025_1752744134.pdf",
      fullContent:
        "Dokumen pelaksanaan bimbingan teknis untuk penguatan kapasitas manajemen wirausaha mahasiswa penerima bantuan P2MW.",
    },
    {
      source: "Kemahasiswaan UNSIQ",
      title: "Hasil Seleksi Internal Program P2MW UNSIQ",
      excerpt:
        "Pengumuman hasil seleksi tingkat universitas untuk usulan kelompok wirausaha mahasiswa UNSIQ.",
      date: "2026",
      url: "https://kemahasiswaan.unsiq.ac.id/pengumuman/hasil-seleksi-internal-program-p2mw-2026",
      fullContent:
        "Pengumuman resmi dari bagian Kemahasiswaan UNSIQ terkait daftar tim mahasiswa yang lolos seleksi internal.",
    },
    {
      source: "LinkedIn",
      title: "Profil Professional: Fiqhan Arriziq",
      excerpt:
        "Jaringan profesional Fiqhan Chusnan Arriziq menampilkan riwayat pengalaman, peran developer, dan proyek teknologi.",
      date: "Active",
      url: "https://id.linkedin.com/in/fiqhan-arriziq-247b59309",
      fullContent:
        "Tautan profil LinkedIn resmi Fiqhan Arriziq untuk melihat jejak karier, keahlian, dan koneksi profesional.",
    },
    {
      source: "Instagram",
      title: "Dokumentasi & Publikasi Media Sosial DiengVibe",
      excerpt:
        "Publikasi visual dan konten promosi resmi DiengVibe di media sosial Instagram.",
      date: "2025",
      url: "https://www.instagram.com/p/DQR8WMQE8ag/",
      fullContent:
        "Postingan dokumentasi dan pembaruan seputar perkembangan serta kegiatan tim DiengVibe di Instagram.",
    },
    {
      source: "Scribd Document",
      title: "SK Penerima Beasiswa UNSIQ",
      excerpt:
        "Dokumen salinan Surat Keputusan penerima beasiswa mahasiswa di lingkungan Universitas Sains Al-Qur'an.",
      date: "Dokumen",
      url: "https://id.scribd.com/document/805232755/Sk-Penerima-Beasiswa-Unsiq-compressed",
      fullContent:
        "Arsip dokumen SK Penerima Beasiswa UNSIQ yang memuat daftar nama mahasiswa penerima program beasiswa.",
    },
    {
      source: "Scribd Document",
      title: "Arsip Dokumen Seleksi & Bimtek P2MW (Scribd)",
      excerpt:
        "Arsip dokumen publikasi Surat Bimtek P2MW 2025 yang tersimpan di platform Scribd.",
      date: "Dokumen",
      url: "https://id.scribd.com/document/894558339/surat-bimtek-p2mw-2025-1752744134",
      fullContent:
        "Salinan digital surat bimbingan teknis P2MW 2025 yang diunggah dan diarsipkan di Scribd.",
    },
    {
      source: "Scribd Document",
      title: "Arsip Pengumuman Penerima Bantuan P2MW (Scribd)",
      excerpt:
        "Arsip publikasi dokumen Surat Pengumuman Penerima Bantuan P2MW 2025.",
      date: "Dokumen",
      url: "https://id.scribd.com/document/906086870/Surat-Pengumuman-Penerima-Bantuan-p2mw-2025-1752220005",
      fullContent:
        "Salinan dokumen penetapan pemenang/penerima bantuan pendanaan P2MW 2025 di platform Scribd.",
    },
    {
      source: "Scribd Document",
      title: "Arsip Surat PKP & KMI Expo XVI 2025 (Scribd)",
      excerpt:
        "Dokumen arsip penilaian kemajuan pelaksanaan P2MW dan seleksi peserta KMI Expo XVI.",
      date: "Dokumen",
      url: "https://id.scribd.com/document/931472645/Surat-Pkp-Dan-Seleksi-Peserta-Kmi-Expo-Xvi-2025-1758270655",
      fullContent:
        "Salinan digital surat PKP dan panduan seleksi kontingen KMI Expo 2025.",
    },
    {
      source: "Scribd Document",
      title: "Matrikulasi Komputer Tahap 1 2024",
      excerpt:
        "Dokumen data akademik pelaksanaan program matrikulasi komputer mahasiswa UNSIQ.",
      date: "2024",
      url: "https://www.scribd.com/document/776426710/Matrikulasi-Komputer-Tahap-1-2024",
      fullContent:
        "Dokumen data pelaksanaan dan daftar peserta matrikulasi komputer tahap 1 di UNSIQ.",
    },
    {
      source: "Scribd Document",
      title: "Matrikulasi Bahasa Inggris Tahap 1 2024",
      excerpt:
        "Dokumen data akademik pelaksanaan program matrikulasi Bahasa Inggris mahasiswa UNSIQ.",
      date: "2024",
      url: "https://www.scribd.com/document/776426709/Matrikulasi-B-Inggris-Tahap-1-2024",
      fullContent:
        "Dokumen data pelaksanaan program pelatihan/matrikulasi Bahasa Inggris tahap 1 UNSIQ.",
    },
    {
      source: "Scribd Document",
      title: "Arsip Berkas Akademik Kemahasiswaan",
      excerpt:
        "Dokumen pendukung arsip kemahasiswaan dan riset di platform Scribd.",
      date: "Dokumen",
      url: "https://id.scribd.com/document/786655711/bAAhX6tEXJU2e3VYhfA2e7AA",
      fullContent:
        "Arsip dokumen pendukung seputar aktivitas dan berkas mahasiswa.",
    },
    {
      source: "Kompasiana Profile",
      title: "Profil Penulis & Contributor: Salsabila Hasyim",
      excerpt:
        "Laman profil penulis publikasi yang meliput ulasan aplikasi DiengVibe di Kompasiana.",
      date: "Profile",
      url: "https://www.kompasiana.com/salsabilahasyim11/about",
      fullContent:
        "Laman profil penulis Kompasiana yang secara aktif mempublikasikan artikel edukasi dan promosi aplikasi DiengVibe.",
    },
    {
      source: "Shutterstock",
      title: "Aset Vektor & Desain Kreatif",
      excerpt: "Aset desain grafis dan elemen visual pendukung karya kreatif.",
      date: "Aset",
      url: "https://www.shutterstock.com/image-vector/mortal-tulisan-brush-dengan-spidol-2197191223",
      fullContent:
        "Laman lisensi aset grafis tulisan/brush yang digunakan sebagai bagian dari elemen desain.",
    },
  ];

  return (
    <section id="articles" className="py-6 px-4 sm:px-6 scroll-mt-28">
      <div className="max-w-6xl mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/80 dark:border-slate-800/80 rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-[0_10px_40px_rgb(0,0,0,0.03)] transition-colors duration-300">
        {/* Header Section */}
        <div className="space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/60 dark:bg-slate-800/80 border border-slate-300/40 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300">
            Media, Publikasi dan Dokumen
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Liputan, Artikel{" "}
            <span className="text-slate-600 dark:text-slate-400 font-medium">
              & Dokumen Terkait
            </span>
          </h2>
        </div>

        {/* Grid Artikel 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item, idx) => (
            <article
              key={idx}
              className="group p-6 rounded-3xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 hover:bg-white/80 dark:hover:bg-slate-800 hover:border-white dark:hover:border-slate-600 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between gap-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-200/60 dark:bg-slate-700 px-2.5 py-1 rounded-full truncate max-w-[170px]">
                    {item.source}
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors leading-snug line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(idx)}
                  className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Detail
                </button>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-700/80 hover:bg-white dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-600 px-3 py-1.5 rounded-xl transition-all shadow-2xs group-hover:border-slate-300"
                >
                  <span>Buka Tautan</span>
                  <svg
                    className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Pop-up / Modal Detail */}
      {selectedArticle !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-white/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                {articles[selectedArticle].source}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {articles[selectedArticle].title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {articles[selectedArticle].fullContent}
            </p>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                Tutup
              </button>
              <a
                href={articles[selectedArticle].url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-medium text-white bg-slate-800 dark:bg-slate-700 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
              >
                Buka Tautan Resmi &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
