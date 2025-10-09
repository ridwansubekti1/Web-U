'use client'
import { motion } from 'framer-motion'

export default function Example() {
  const themeColor = '#2596be'

  return (
    <div className="bg-[#f7fafc] py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* Heading Section */}
        <motion.h2
          className="text-center text-base/7 font-semibold"
          style={{ color: themeColor }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Pembuatan cepat & modern
        </motion.h2>

        <motion.p
          className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Semua fitur yang kamu butuhkan untuk website profesional
        </motion.p>

        {/* Grid Section */}
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {[
            {
              title: 'Responsif di semua perangkat',
              desc: 'Website akan tampil optimal di perangkat apa pun — dari HP sampai desktop.',
              img: 'https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png',
              span: 'lg:row-span-2',
            },
            {
              title: 'Performa tinggi',
              desc: 'Optimasi kecepatan dan SEO bawaan untuk pengalaman maksimal.',
              img: 'https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png',
            },
            {
              title: 'Keamanan terjamin',
              desc: 'Menggunakan sistem enkripsi dan proteksi modern agar datamu tetap aman.',
              img: 'https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png',
            },
            {
              title: 'API yang powerful',
              desc: 'Integrasi mudah dengan sistem eksternal melalui API modern yang fleksibel.',
              img: 'https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png',
              span: 'lg:row-span-2',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className={`relative ${card.span || ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-px rounded-2xl bg-white shadow-md border border-gray-100" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10">
                  <p
                    className="mt-2 text-lg font-medium tracking-tight text-gray-900 max-lg:text-center"
                    style={{ color: themeColor }}
                  >
                    {card.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    {card.desc}
                  </p>
                </div>
                <div className="flex justify-center items-center px-8 pb-8">
                  <img
                    alt={card.title}
                    src={card.img}
                    className="w-full max-w-sm rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
