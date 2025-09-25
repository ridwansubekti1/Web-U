import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '#',
    price: 'IDR. 500.000',
    description: "Paket yang sempurna jika Anda baru memulai dengan produk kami.",
    features: [
        'Gratis domain',
        'SSL/HTTPS',
        'Hosting 5 GB', 
        'Bandwidth Takterbatas',
        'Konsultasi Gratis',
        'Analisis lanjutan',
        'Integrasi khusus',
    ],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: 'IDR. 1.000.000',
    description: 'Dukungan dan infrastruktur khusus untuk bisnis Anda.',
    features: [
        'Gratis domain',
        'SSL/HTTPS',
        'Hosting 10 GB', 
        'Bandwidth Tak terbatas',
        'Konsultasi Gratis',
        'Analisis lanjutan',
        'Integrasi khusus',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: '#',
    price: 'IDR. 1.500.000',
    description: 'Cocok untuk bisnis yang lebih berkembang dan luas.',
    features: [
        'Gratis domain',
        'SSL/HTTPS',
        'Hosting 25 GB', 
        'Bandwidth Tak terbatas',
        'Konsultasi Gratis',
        'Analisis lanjutan',
        'Integrasi khusus',
    ],
    featured: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">Harga terjangkau</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
          Pilih sesuai kebutuhanmu
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
        Pilih paket terjangkau yang dilengkapi fitur terbaik untuk menarik audiens Anda, membangun loyalitas pelanggan, dan mendorong penjualan.
      </p>
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 items-center justify-items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:grid-cols-3 lg:gap-x-4">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured 
                ? 'relative bg-gray-900 shadow-[0_35px_60px_-12px_rgba(0,0,0,0.25)] ring-2 ring-indigo-500/20 transform translate-y-[-0.5rem] scale-[1.02] lg:translate-y-[-0.5rem] lg:scale-[1.02]'  // Menonjol: shadow custom, ring, translate & scale (hanya di lg untuk responsive)
                : 'bg-white/60 sm:mx-8 lg:mx-0',  // Non-featured: background transparan
              // Rounded corners untuk 3 kolom rapat
              tier.featured
                ? 'rounded-3xl'  // Featured: full rounded
                : tierIdx === 0
                  ? 'rounded-3xl'  // Basic: rounded kiri
                  : 'rounded-3xl',  // Premium: rounded kanan
              'p-8 ring-1 ring-gray-900/10 sm:p-10 transition-transform duration-300 hover:scale-105',  // Tambah hover scale untuk interaktivitas
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.price}
              </span>
              <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/ 1 tahun pertama</span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-indigo-600 ring-1 ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Pilih Paket
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}