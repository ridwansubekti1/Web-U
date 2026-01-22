'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Rizky Pratama',
    role: 'Owner RZ Tech',
    feedback:
      'Website yang dibuat bener-bener profesional! Desainnya clean, responsif, dan bantu banget buat ningkatin kepercayaan klien.',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    name: 'Dewi Lestari',
    role: 'Founder DayaCipta Studio',
    feedback:
      'Timnya responsif dan ngerti banget apa yang aku mau. Proses cepat, hasilnya estetik banget! Highly recommended!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Bagas Firmansyah',
    role: 'Digital Marketer',
    feedback:
      'Mantap banget! Website toko online-nya jalan lancar, dan udah bantu ningkatin penjualan juga.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-5xl text-center mb-14"
      >
        <h2 className="text-base font-semibold text-[#2596be]">💬 Testimoni</h2>
        <p className="mt-2 text-4xl font-semibold text-gray-900">
          Apa Kata Mereka Tentang Layanan Kami
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-lg">
          Cerita nyata dari para klien yang udah ngerasain hasilnya langsung.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <p className="text-gray-700 italic text-sm leading-relaxed">
                “{t.feedback}”
              </p>
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  {t.name}
                </p>
                <p className="text-sm text-[#2596be]">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
