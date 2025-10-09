'use client'
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { useState } from 'react'
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  ArrowPathIcon,
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline'

// 🔹 Import form login
import Form from "./Formlog.jsx"

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()
  const themeColor = "#2596be"

  const navLinkClass = (path) =>
    `relative text-sm font-semibold transition-colors duration-200 ${
      pathname === path
        ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:rounded-full after:bg-[#2596be]"
        : "text-gray-900 dark:text-white hover:text-[#2596be]"
    }`

  // 🔹 klik order → buka form kalau belum login
  const handleOrderClick = (e) => {
    e.preventDefault()
    if (!isLoggedIn) {
      setShowLogin(true)
    } else {
      window.location.href = "/order"
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-all">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img alt="Logo" src="https://webu-pink.vercel.app/logo.png" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Menu Desktop */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center">
          <Link href="/" className={navLinkClass("/")} style={pathname === "/" ? { color: themeColor } : {}}>Beranda</Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 dark:text-white hover:text-[#2596be]">
              Product
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400 dark:text-gray-500" />
            </PopoverButton>
            <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 dark:bg-gray-800">
              <div className="p-4">
                {products.map((item) => (
                  <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50 dark:hover:bg-white/5">
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-[#2596be]" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900 dark:text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="/testimonials" className={navLinkClass("/testimonials")} style={pathname === "/testimonials" ? { color: themeColor } : {}}>Testimoni</Link>
          <Link href="/tentang-kami" className={navLinkClass("/tentang-kami")} style={pathname === "/tentang-kami" ? { color: themeColor } : {}}>Tentang Kami</Link>
        </PopoverGroup>

        {/* Tombol Order */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={handleOrderClick}
            className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs 
            hover:opacity-90 transition-transform duration-300 hover:scale-105"
            style={{ backgroundColor: themeColor }}
          >
            Order
          </button>
        </div>
      </nav>

      {/* 🔹 POPUP LOGIN (dengan animasi smooth) */}
      <Transition show={showLogin} as="div">
        {/* Background fade */}
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]" onClick={() => setShowLogin(false)} />
        </Transition.Child>

        {/* Popup scale + fade */}
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-90 translate-y-4"
          enterTo="opacity-100 scale-100 translate-y-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100 translate-y-0"
          leaveTo="opacity-0 scale-95 translate-y-2"
        >
          <Dialog open={showLogin} onClose={() => setShowLogin(false)} className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <DialogPanel className="mx-auto bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative">
              <button
                onClick={() => setShowLogin(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <Form />
            </DialogPanel>
          </Dialog>
        </Transition.Child>
      </Transition>
    </header>
  )
}
