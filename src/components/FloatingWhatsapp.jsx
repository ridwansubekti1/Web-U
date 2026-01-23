'use client'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsapp() {
  const phone = '6289514379022'
  const message = encodeURIComponent(
    'Halo Web U, saya tertarik dengan jasa pembuatan website.'
  )

  return (
    <Link
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      aria-label="Chat WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        flex items-center gap-2
        bg-green-500 hover:bg-green-600
        text-white text-sm font-medium
        px-4 py-3 rounded-full
        shadow-lg
        transition-all duration-300
        hover:scale-105
      "
    >
      <MessageCircle size={18} />
      <span className="hidden sm:block">Chat WhatsApp</span>
    </Link>
  )
}
