import { Metadata } from "next";
import Image from "next/image";
import PortfolioCarousel from "@/components/portfolio/PortfolioCarousel";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portafolio Interactivo | ConsultansGC",
  description: "Explora nuestros proyectos más recientes a través de este portafolio interactivo.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Encabezado */}
      <header className="w-full max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <Image
            src="/next.svg"
            alt="Logo"
            width={120}
            height={30}
            className="dark:invert"
          />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li className="text-sm font-medium hover:text-blue-600 transition-colors">
              <a href="#portfolio">Portafolio</a>
            </li>
            <li className="text-sm font-medium hover:text-blue-600 transition-colors">
              <a href="#acerca">Acerca</a>
            </li>
            <li className="text-sm font-medium hover:text-blue-600 transition-colors">
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>


      {/* Sección principal de portafolio */}
      <section 
        id="portfolio" 
        className="w-full py-16 bg-gray-50 dark:bg-gray-900"
      >
        <PortfolioCarousel projects={projects} />
      </section>
      
    </div>
  );
}
