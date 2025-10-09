'use client'
import { motion } from "framer-motion"
import { useState } from "react"

export default function Form() {
  const themeColor = "#2596be"
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-sm mx-auto text-center"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Selamat Datang di <span style={{ color: themeColor }}>Web U</span>
      </h2>

      <form className="space-y-5">
        {/* Email */}
        <div className="text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2596be]"
          />
        </div>

        {/* Password */}
        <div className="text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2596be]"
          />
        </div>

        {/* Tombol Login */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full py-3 rounded-xl text-white font-semibold shadow-md transition-all"
          style={{ backgroundColor: themeColor }}
        >
          Masuk
        </motion.button>
      </form>

      {/* Separator */}
      <div className="flex items-center justify-center mt-6">
        <span className="h-px w-16 bg-gray-300" />
        <span className="text-gray-500 text-sm mx-3">atau</span>
        <span className="h-px w-16 bg-gray-300" />
      </div>

      {/* Tombol Sosial */}
      <div className="mt-5 flex justify-center gap-4">
        <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-50 transition">
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
          <span className="text-sm font-medium text-gray-700">Google</span>
        </button>

        <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-50 transition">
          <img src="https://www.svgrepo.com/show/452196/apple.svg" alt="Apple" className="w-5 h-5" />
          <span className="text-sm font-medium text-gray-700">Apple</span>
        </button>
      </div>

      {/* Footer */}
      <p className="text-sm text-gray-600 mt-6">
        Belum punya akun?{" "}
        <a href="#" className="font-semibold hover:underline" style={{ color: themeColor }}>
          Daftar Sekarang
        </a>
      </p>
    </motion.div>
  )
}
