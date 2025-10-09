"use client"
import { Users, Settings, Headphones, Banknote, MonitorSmartphone } from "lucide-react"
import { motion } from "framer-motion"

export default function Superiority() {
  // Animasi container (stagger)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  }

  // Animasi card
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative bg-gradient-to-b from-white via-[#e6f4f8] to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
        {/* Judul */}
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Mengapa <span className="text-[#2596be]">Web U</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Kami hadir sebagai mitra digital UMKM yang memahami kebutuhan Anda, bukan sekadar penyedia layanan.
        </p>

        {/* Grid Keunggulan */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-8 sm:mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        >
          {[
            {
              icon: <Users className="mx-auto h-10 w-10 text-[#2596be]" />,
              title: "Spesialis UMKM",
              desc: "Kami paham tantangan dan kebutuhan UMKM. Solusi kami dirancang agar praktis, terjangkau, dan langsung berdampak.",
            },
            {
              icon: <Settings className="mx-auto h-10 w-10 text-[#2596be]" />,
              title: "Customizable & Scalable",
              desc: "Setiap usaha itu unik. Layanan kami bisa disesuaikan, mulai dari fitur, desain, hingga skala pengembangan ke depannya.",
            },
            {
              icon: <Headphones className="mx-auto h-10 w-10 text-[#2596be]" />,
              title: "Support Amanah & Responsif",
              desc: "Tim kami siap mendampingi Anda dari awal sampai after-sales, dengan layanan yang amanah dan komunikasi yang cepat.",
            },
            {
              icon: <Banknote className="mx-auto h-10 w-10 text-[#2596be]" />,
              title: "Hemat Biaya Tanpa Mengorbankan Kualitas",
              desc: "Teknologi terbaik tak harus mahal. Kami mengutamakan efisiensi dan efektivitas agar UMKM bisa naik kelas.",
            },
            {
              icon: <MonitorSmartphone className="mx-auto h-10 w-10 text-[#2596be]" />,
              title: "Desain Modern, Sistem Andal",
              desc: "Website dan aplikasi Anda akan tampil profesional, cepat, dan mudah digunakan—membangun kepercayaan pelanggan Anda.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#2596be]/10 
                         transition-all duration-500 hover:shadow-[0_0_30px_-8px_rgba(37,150,190,0.5)] 
                         hover:ring-2 hover:ring-[#2596be]/40 hover:scale-[1.04]"
            >
              {/* Efek Glow Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[#2596be]/5 via-transparent to-[#2596be]/10 blur-xl"></div>

              <div className="relative z-10">
                {item.icon}
                <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-[#2596be] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
