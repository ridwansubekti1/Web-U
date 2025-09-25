export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
           <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Bingung mau buat website dimana? <a href="#" className="font-semibold text-indigo-600"><span aria-hidden="true" className="absolute inset-0"></span>Disini aja! <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div>
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Buat websitemu disini</h1>
          <p 
            className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Websitemu akan dilihat banyak pengguna. Tentunya harus menarik dan mudah digunakan.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 
              text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
              transition-transform duration-300 hover:scale-105"
            >
              Hubungi Kami
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Yuk dilihat! <span aria-hidden="true">&rarr;</span>
            </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
