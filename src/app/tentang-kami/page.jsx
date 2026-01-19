"use client"
import { motion } from "framer-motion"
import { GlobeAltIcon, RocketLaunchIcon, UserGroupIcon, CheckCircleIcon } from "@heroicons/react/24/outline"

export default function AboutPage() {
  const theme = "#2596be"

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  return (
    <main className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#2596be] via-sky-500 to-[#40b4e6] py-24 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl px-6"
        >
          <h1 className="text-5xl font-bold sm:text-6xl">Kami Hadir untuk UMKM Indonesia</h1>
          <p className="mt-6 text-lg sm:text-xl text-sky-100">
            Membangun teknologi sederhana, terjangkau, dan berdampak besar bagi pertumbuhan usaha Anda.
          </p>
        </motion.div>
      </section>

      {/* PROFILE SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
           <motion.div variants={fadeUp} className="flex justify-center">
            <img
              src="/images/logo.svg"
              alt="Tim Web U"
              className="
                w-64 sm:w-72 lg:w-80
                h-auto
                rounded-3xl
                shadow-xl
                transition-transform duration-300
                hover:scale-105
              "
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold text-[#2596be] mb-4">Tentang Perusahaan</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>Web U</strong> adalah perusahaan IT Consultant yang fokus membantu UMKM Indonesia
              go digital melalui layanan pembuatan website, aplikasi mobile, dan sistem manajemen usaha.
              Kami hadir bukan sekadar penyedia jasa — tetapi sebagai mitra strategis yang tumbuh bersama klien.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dengan solusi yang sederhana, aman, dan dapat disesuaikan, kami membantu pelaku usaha dari
              berbagai skala untuk mengelola bisnis secara efisien dan menjangkau pasar yang lebih luas.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* VISI & MISI */}
      <section className="bg-[#f8fcff] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#2596be]"
          >
            Visi & Misi Kami
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-2 gap-8 text-left"
          >
            <motion.div variants={fadeUp} className="rounded-2xl bg-white shadow-md p-8">
              <RocketLaunchIcon className="h-8 w-8 text-[#2596be]" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Visi</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Menjadi mitra digital terpercaya bagi UMKM Indonesia dalam mengembangkan usaha melalui
                solusi teknologi yang terjangkau, efektif, dan mudah digunakan.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-white shadow-md p-8">
              <UserGroupIcon className="h-8 w-8 text-[#2596be]" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Misi</h3>
              <ul className="mt-3 list-disc list-inside text-gray-600 leading-relaxed space-y-1">
                <li>Membantu UMKM go digital dengan solusi praktis.</li>
                <li>Menyediakan layanan yang ramah UMKM dan dapat disesuaikan.</li>
                <li>Memberdayakan pelaku usaha kecil agar bisa bersaing luas.</li>
                <li>Mengedukasi tentang pentingnya digitalisasi usaha.</li>
                <li>Membangun ekosistem digital UMKM yang saling bertumbuh.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#2596be]"
          >
            Nilai Utama Kami – <span className="font-extrabold">AMANAH</span>
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              ["A", "Amanah", "Menjaga kepercayaan klien dengan integritas dan tanggung jawab."],
              ["M", "Mudah Diakses", "Solusi sederhana dan terjangkau untuk semua UMKM."],
              ["A", "Adaptif", "Menyesuaikan sistem dengan kebutuhan tiap usaha."],
              ["N", "Nyaman Digunakan", "User-friendly tanpa perlu keahlian teknis tinggi."],
              ["A", "Akurat & Andal", "Hasil presisi dan dapat diandalkan jangka panjang."],
              ["H", "Hadir untuk Bertumbuh", "Kami tumbuh bersama klien, bukan sekadar vendor."],
            ].map(([abbr, title, desc], i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-6 rounded-2xl shadow-md border border-[#2596be]/20 hover:border-[#2596be] transition-all"
              >
                <div
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-full font-bold text-white text-lg"
                  style={{ backgroundColor: theme }}
                >
                  {abbr}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#2596be]">{title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-[#2596be] to-sky-500 py-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl px-6"
        >
          <h2 className="text-4xl font-bold mb-6">Yuk, Bangun Bisnis Digitalmu Bareng Web U!</h2>
          <p className="text-lg mb-8 text-sky-100">
            Kami siap bantu wujudkan ide digitalmu jadi nyata dengan teknologi yang aman, mudah, dan efisien.
          </p>
          <a
            href="/contact"
            className="rounded-md bg-white text-[#2596be] px-6 py-3 font-semibold shadow-md hover:bg-sky-100 transition-all"
          >
            Konsultasi Gratis Sekarang
          </a>
        </motion.div>
      </section>
    </main>
  )
}
