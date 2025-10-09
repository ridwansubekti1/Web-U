'use client'
import { motion } from 'framer-motion'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Pembuatan yang terstruktur',
    description:
      'Proses pembuatan dilakukan dengan langkah-langkah yang jelas dan efisien untuk hasil terbaik.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL Sertifikat',
    description:
      'Keamanan website terjamin dengan sertifikat SSL yang membuat data pengguna tetap aman.',
    icon: LockClosedIcon,
  },
  {
    name: 'Tahapan yang jelas',
    description:
      'Setiap proses akan dijelaskan secara transparan agar kamu tahu progres website-mu.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Keamanan Lanjutan',
    description:
      'Sistem perlindungan tambahan untuk mencegah serangan siber dan menjaga integritas website-mu.',
    icon: FingerPrintIcon,
  },
]

export default function Example() {
  const themeColor = '#2596be'

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Heading Section */}
        <motion.div
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2
            className="text-base/7 font-semibold"
            style={{ color: themeColor }}
          >
            Pembuatan yang cepat
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Semua yang kamu butuhkan untuk membuat websitemu
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Websitemu akan dikelola dengan baik dan terstruktur, dengan keamanan yang terjamin
            dan proses yang efisien.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.dl
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 
                     lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              className="relative pl-16"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <dt className="text-base/7 font-semibold text-gray-900">
                <div
                  className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg shadow-md"
                  style={{ backgroundColor: themeColor }}
                >
                  <feature.icon aria-hidden="true" className="size-6 text-white" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </div>
  )
}
