import { Metadata } from "next";
import { Header } from '@/components/organisms/Header';
import { HeroSection } from '@/components/home/HeroSection';
import { LogoCloud } from '@/components/sections/LogoCloud';
import { Solutions } from '@/components/sections/Solutions';
import { Methodology } from '@/components/sections/Methodology';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/organisms/Footer';
import { CaseStudiesThinking } from "@/components/sections/CaseStudiesThinking";
// import HomeClient from "@/components/HomeClient";

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
        <section id="inicio">
          <HeroSection />
        </section>

        {/* Sección de logos de clientes */}
        <LogoCloud />

        {/* Sección de Soluciones */}
        <section id="soluciones">
          <Solutions />
        </section>

        {/* Sección de Metodología */}
        <section id="metodologia">
          <Methodology />
        </section>

        {/* Sección de Casos de Éxito */}
        <section id="casos-de-exito">
          <CaseStudies />
        </section>

        {/* Sección de Casos de Éxito */}
        <section id="casos-de-exito-design-thinking">
          <CaseStudiesThinking />
        </section>


        {/* Sección de Contacto */}
        <section id="contacto">
          <CTA />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
