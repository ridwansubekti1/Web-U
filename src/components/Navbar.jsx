"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, Fragment } from "react"
import { Dialog, Transition, Popover } from "@headlessui/react"
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline"
import Form from "./Formlog.jsx"

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const themeColor = "#2596be"

  const products = [
    { name: "Analytics", description: "Pantau performa websitemu", href: "#", icon: ChartPieIcon },
    { name: "Engagement", description: "Bangun koneksi sama audiensmu", href: "#", icon: CursorArrowRaysIcon },
    { name: "Security", description: "Data pelanggan aman 100%", href: "#", icon: FingerPrintIcon },
    { name: "Integrations", description: "Integrasi dengan tools populer", href: "#", icon: SquaresPlusIcon },
    { name: "Automations", description: "Bikin funnel yang auto konversi", href: "#", icon: ArrowPathIcon },
  ]

  const navLinks = [
    { name: "Testimoni", href: "/testimoni" },
    { name: "Tentang Kami", href: "/tentang-kami" },
  ]

  const navLinkClass = (path) =>
    `relative text-sm font-semibold transition-all duration-200 ${
      pathname === path
        ? "text-[#2596be] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#2596be] after:rounded-full"
        : "text-gray-900 dark:text-white hover:text-[#2596be]"
    }`

  const handleOrderClick = (e) => {
    e.preventDefault()
    if (!isLoggedIn) setShowLogin(true)
    else window.location.href = "/order"
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-all">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* MENU TENGAH */}
        <div className="hidden lg:flex items-center gap-x-8">
          {/* Beranda */}
          <Link href="/" className={navLinkClass("/")}>
            Beranda
          </Link>

          {/* Product Dropdown */}
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 dark:text-white hover:text-[#2596be]">
              Produk
              <ChevronDownIcon className="w-5 h-5 text-gray-400" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-2"
            >
              <Popover.Panel className="absolute left-1/2 z-20 mt-3 w-screen max-w-md -translate-x-1/2 rounded-3xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-5 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
                    >
                      <div className="flex size-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                        <item.icon
                          className="w-5 h-5 text-gray-600 group-hover:text-[#2596be]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex flex-col">
                        <a href={item.href} className="font-semibold text-gray-900 dark:text-white">
                          {item.name}
                        </a>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* Sisanya */}
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={navLinkClass(link.href)}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* TOMBOL ORDER */}
        <div className="hidden lg:flex">
          <button
            onClick={handleOrderClick}
            className="rounded-md px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90 hover:scale-105 transition"
            style={{ backgroundColor: themeColor }}
          >
            Order
          </button>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="lg:hidden fixed inset-0 z-50"
          onClose={() => setMobileMenuOpen(false)}
        >
          <Transition.Child
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" />
          </Transition.Child>

          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="ease-in duration-200"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-0"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white dark:bg-gray-900 shadow-lg p-6 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="h-8"
                />
                <button onClick={() => setMobileMenuOpen(false)}>
                  <XMarkIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {/* Beranda */}
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold ${
                    pathname === "/"
                      ? "text-[#2596be]"
                      : "text-gray-800 dark:text-gray-200 hover:text-[#2596be]"
                  }`}
                >
                  Beranda
                </Link>

                {/* Product */}
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-800 dark:text-gray-200 hover:text-[#2596be]">
                    Product
                    <ChevronDownIcon className="w-5 h-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {products.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#2596be]"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </details>

                {/* Sisanya */}
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-semibold ${
                      pathname === link.href
                        ? "text-[#2596be]"
                        : "text-gray-800 dark:text-gray-200 hover:text-[#2596be]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <button
                  onClick={(e) => {
                    handleOrderClick(e)
                    setMobileMenuOpen(false)
                  }}
                  className="mt-4 w-full rounded-md px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90 transition"
                  style={{ backgroundColor: themeColor }}
                >
                  Order
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>

      {/* LOGIN POPUP */}
      <Transition show={showLogin} as={Fragment}>
        <Dialog
          open={showLogin}
          onClose={() => setShowLogin(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        >
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 w-full max-w-md relative">
              <button
                onClick={() => setShowLogin(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <Form />
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  )
}
