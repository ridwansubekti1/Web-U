'use client'
import { motion } from 'framer-motion'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Dikelola dengan baik.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Dengan SSL Sertifikat.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Backup data yang aman.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function Example() {
  const themeColor = "#2596be"

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 
                        lg:mx-0 lg:max-w-none lg:grid-cols-2">

          {/* Text Section with Motion */}
          <motion.div
            className="lg:pt-4 lg:pr-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="lg:max-w-lg">
              <motion.h2
                className="text-base/7 font-semibold"
                style={{ color: themeColor }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Pembuatan cepat
              </motion.h2>

              <motion.p
                className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Alur yang lebih baik
              </motion.p>

              <motion.p
                className="mt-6 text-lg/8 text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
              >
                Pembuatan website sangat penting untuk instansi, bisnis maupun personal branding.
                Website modern dan responsif tentunya sangat dicari karena mudah digunakan dan
                akan membuat pengelolaanmu menjadi lebih baik.
              </motion.p>

              <motion.dl
                className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.name}
                    className="relative pl-9 transition-transform duration-300 hover:translate-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * i, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5"
                        style={{ color: themeColor }}
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </motion.div>
                ))}
              </motion.dl>
            </div>
          </motion.div>

          {/* Image Section with Motion */}
          <motion.img
            alt="Product screenshot"
            src="https://webu-pink.vercel.app/foto.webp"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 
                       sm:w-228 md:-ml-4 lg:-ml-0 transition-transform duration-500 
                       hover:scale-105 hover:shadow-2xl"
            style={{ borderColor: `${themeColor}33` }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </div>
  )
}
