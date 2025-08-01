import { Metadata } from "next";
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/home/HeroSection';
import { LogoCloud } from '@/components/sections/LogoCloud';

export const metadata: Metadata = {
  title: "Equipo GC: Agencia de Design Thinking para Marketing, Logística y Tecnología",
  description: "Integramos estrategia, logística y tecnología a través del Design Thinking para resolver los desafíos de tu marca. Descubre nuestras soluciones B2B en Colombia y Costa Rica.",
};

// NOTA: Este componente reemplaza la anterior vista de portafolio en la página de inicio.
export default function HomePage() {
  return (
    <div className="bg-black">
      <Header />
      <main>
        {/* Sección Hero */}
        <HeroSection />

        {/* Sección de logos de clientes */}
        <LogoCloud />

        {/* Aquí irán las futuras secciones: Solutions, etc. */}
      </main>
    </div>
  );
}
