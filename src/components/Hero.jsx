'use client'
import { motion } from 'framer-motion'

export default function Example() {
  const themeColor = "#2596be"

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 overflow-hidden">
      <div className="text-center">

        {/* Banner info kecil */}
        <motion.div
          className="hidden sm:mb-8 sm:flex sm:justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Bingung mau buat website dimana?{' '}
            <a
              href="#"
              className="font-semibold"
              style={{ color: themeColor }}
            >
              <span aria-hidden="true" className="absolute inset-0"></span>
              Disini aja! <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </motion.div>

        {/* Judul dan deskripsi */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Buat websitemu disini
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Websitemu akan dilihat banyak pengguna. Tentunya harus menarik dan mudah digunakan.
          </p>
        </motion.div>

        {/* Tombol aksi */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-x-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#"
            className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs 
            hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 transition-transform duration-300 hover:scale-105"
            style={{
              backgroundColor: themeColor,
              outlineColor: themeColor,
            }}
          >
            Hubungi Kami
          </a>

          <a
            href="#"
            className="text-sm font-semibold text-gray-900 hover:underline"
            style={{ color: themeColor }}
          >
            Yuk dilihat! <span aria-hidden="true">&rarr;</span>
          </a>
        </motion.div>
        
      </div>
    </main>
  )
}
