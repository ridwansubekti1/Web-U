import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react'; // Ikon sosmed

export default function Footer() {
  const pages = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang kami', href: '#tentang-kami' },
    { name: 'Portfolio', href: '#portofolio' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Testimoni', href: '#testimoni' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/webu.idn/', icon: Instagram },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Kolom Kiri: Logo + Media Sosial */}
        <div className="space-y-6 flex-col">
          <Link href="#beranda" className="inline-block mb-4 md:mb-8 text-2xl font-bold text-white hover:text-blue-400 transition-colors">
            <Image
              src="https://webu-pink.vercel.app/logo.png"
              alt="Web U Logo"  // Alt text untuk accessibility dan SEO
              width={40}       // Width fixed (sesuaikan ukuran asli gambar)
              height={40}       // Height fixed (sesuaikan proporsi)
              className="object-contain hover:opacity-80 transition-opacity"  // Styling: proporsi terjaga, hover effect
                priority          // Load prioritas tinggi (untuk navbar visible pertama)
            />
            <span className="mt-4 text-base font-semibold text-white">Web U</span>
          </Link>
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Kolom Kanan: Pages */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Pages</h3>
          <ul className="space-y-2">
            {pages.map((page) => (
              <li key={page.name}>
                <Link
                  href={page.href}
                  className="text-gray-300 hover:text-white transition-colors block py-1"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
        <p>&copy; 2024 Web U. All rights reserved.</p>
      </div>
    </footer>
  );
}