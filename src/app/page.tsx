import Image from "next/image";

export default async function Home() {
  return (
    <div className="container">
      <section className="relative min-h-[480px] rounded-xl overflow-hidden">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFwWu03KbBw18DpHymTbc-WuKYnosXDC7yvCML9HYG_fmgFHLW7D_VlHq1JMawRPYbHyfcrnSL85LP6DJf33Xzgeh4joRqMbV3mgoG8lQ8p493-jKFpoFl7QZsAIEGjpZOap8lyoymZkBGddKIeGQvgb0m7EtH3R04HkPg82INUfMRn1jtdA4B_ywEb94e-OzfXrV_PaVxt_NS_sMLB5drP9fhF7OwL8k1pPpqX93IeribEA9OYNzMp6ddmzEVpy7XeeKCupMtNOQ"
          alt="Baloncesto Valle Banner"
          fill
          priority
          className="absolute inset-0 -z-10 object-cover"
        />
        <div
          className="absolute inset-0 bg-black/25 dark:bg-black/40 -z-0"
          aria-hidden
        />
        <div className="relative z-10 flex h-full flex-col items-start justify-end p-6 text-white @[480px]:p-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight drop-shadow-md @[480px]:text-5xl">
              Baloncesto Valle
            </h1>
            <p className="max-w-2xl text-base drop-shadow-sm @[480px]:text-lg">
              Sigue toda la acción del baloncesto en el Valle del Cauca.
              Noticias, resultados, estadísticas y más.
            </p>
          </div>
          <button className="mt-6 flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg transition-transform hover:scale-105">
            Ver Noticias
          </button>
        </div>
      </section>
    </div>
  );
}
