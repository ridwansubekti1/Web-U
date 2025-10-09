// WebPricingCarouselLoop.jsx
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Web Company Profile',
    price: 'IDR. 750.000',
    description: 'Website profesional untuk memperkenalkan bisnis atau perusahaan Anda secara online.',
    features: [
      'Desain responsif & modern',
      'Halaman Tentang Kami, Layanan, dan Kontak',
      'Gratis domain & SSL 1 tahun',
      'Integrasi WhatsApp & Google Maps',
      'Optimasi SEO dasar',
    ],
  },
  {
    name: 'Web Toko Online (E-commerce)',
    price: 'IDR. 2.000.000',
    description: 'Solusi lengkap untuk jualan online dengan fitur keranjang & pembayaran otomatis.',
    features: [
      'Fitur keranjang belanja & checkout',
      'Dashboard manajemen produk',
      'Integrasi payment gateway',
      'Notifikasi pesanan otomatis',
      'Optimasi SEO produk',
    ],
  },
  {
    name: 'Web Katalog Produk',
    price: 'IDR. 1.200.000',
    description: 'Tampilkan daftar produk tanpa transaksi, cocok untuk katalog bisnis atau brand.',
    features: [
      'Desain katalog interaktif',
      'Halaman detail produk',
      'Filter & pencarian produk',
      'Integrasi WhatsApp order',
      'Hosting 10 GB',
    ],
  },
  {
    name: 'Web Portofolio / Personal Branding',
    price: 'IDR. 800.000',
    description: 'Tunjukkan karya dan profil Anda dengan website personal yang standout.',
    features: [
      'Halaman galeri karya',
      'Profil kreatif & kontak',
      'Tampilan responsif mobile',
      'Integrasi media sosial',
      'Optimasi SEO dasar',
    ],
  },
  {
    name: 'Web Layanan Jasa',
    price: 'IDR. 1.000.000',
    description: 'Website profesional untuk bisnis layanan seperti konsultan, bengkel, atau agensi.',
    features: [
      'Halaman layanan & testimoni',
      'Formulir kontak cepat',
      'Integrasi Google Review',
      'Gratis domain .com 1 tahun',
      'Hosting 10 GB',
    ],
  },
]

export default function WebPricingCarouselLoop() {
  const [index, setIndex] = useState(0)
  const total = tiers.length

  useEffect(() => {
    const timer = setInterval(() => next(), 5000)
    return () => clearInterval(timer)
  }, [index])

  const next = () => setIndex((prev) => (prev + 1) % total)
  const prev = () => setIndex((prev) => (prev - 1 + total) % total)

  const getVisibleCards = () => {
    const cards = []
    for (let i = -1; i <= 1; i++) {
      const idx = (index + i + total) % total
      cards.push({ ...tiers[idx], position: i })
    }
    return cards
  }

  const visible = getVisibleCards()

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-5xl text-center mb-10">
        <h2 className="text-base font-semibold text-[#2596be]">💻 Paket Website</h2>
        <p className="mt-2 text-4xl font-semibold text-gray-900">Pilih Jenis Website Sesuai Kebutuhanmu</p>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-lg">
          Dari company profile sampai crowdfund — semua bisa disesuaikan dengan identitas brand kamu.
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Prev Button */}
        <button
          onClick={prev}
          className="absolute left-4 z-20 p-3 bg-white text-[#2596be] rounded-full shadow-md hover:bg-[#e7f8ff] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Cards */}
        <div className="flex justify-center items-center gap-4">
          <AnimatePresence>
            {visible.map((card) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className={`relative bg-white p-6 rounded-2xl shadow-md w-[320px] transition-all duration-500 ${
                  card.position === 0
                    ? 'ring-2 ring-[#2596be]/50 shadow-lg z-10 scale-[1.02]'
                    : 'opacity-80 scale-95'
                }`}
              >
                <h3 className="text-[#2596be] text-lg font-semibold">{card.name}</h3>
                <div className="mt-3 flex items-baseline gap-x-2">
                  <span className="text-gray-900 text-2xl font-bold">{card.price}</span>
                  <span className="text-gray-500 text-sm">/ project</span>
                </div>
                <p className="mt-3 text-sm text-gray-600">{card.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600 text-left">
                  {card.features.map((f) => (
                    <li key={f} className="flex gap-x-2">
                      <CheckIcon className="h-5 w-5 text-[#2596be]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-md bg-[#2596be] text-white py-2 font-semibold hover:bg-[#1f84a8] transition">
                  Pilih Paket
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute right-4 z-20 p-3 bg-white text-[#2596be] rounded-full shadow-md hover:bg-[#e7f8ff] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {tiers.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === index ? 'bg-[#2596be] scale-110' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
