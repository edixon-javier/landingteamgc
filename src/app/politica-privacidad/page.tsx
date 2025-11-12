import { Metadata } from "next";
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Política de Privacidad | Equipo GC - ConsultansGC",
  description: "Conoce cómo Equipo GC protege y maneja tu información personal. Política de privacidad actualizada según normativas de protección de datos.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
              Inicio
            </Link>
            <span className="text-gray-500 mx-2">/</span>
            <span className="text-gray-300">Política de Privacidad</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Política de Privacidad
            </h1>
            <p className="text-gray-300 text-lg">
              Última actualización: {new Date().toLocaleDateString('es-CO')}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-blue max-w-none">
            <div className="bg-gray-900/50 rounded-lg p-8 space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Información que Recopilamos</h2>
                <p className="mb-4">
                  En Equipo GC - ConsultansGC, recopilamos información para brindar mejores servicios de consultoría y desarrollo:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Información de contacto (nombre, email, teléfono)</li>
                  <li>Información empresarial y de proyectos</li>
                  <li>Datos de navegación y uso del sitio web</li>
                  <li>Comunicaciones y consultas enviadas</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Cómo Utilizamos tu Información</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Proporcionar servicios de consultoría personalizados</li>
                  <li>Comunicarnos contigo sobre proyectos y servicios</li>
                  <li>Mejorar nuestros servicios y experiencia de usuario</li>
                  <li>Enviar información relevante sobre nuestras soluciones</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Protección de Datos</h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal 
                  contra accesos no autorizados, alteración, divulgación o destrucción.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Compartir Información</h2>
                <p>
                  No vendemos, comercializamos o transferimos tu información personal a terceros, excepto cuando 
                  sea necesario para proporcionar nuestros servicios o cuando lo requiera la ley.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Tus Derechos</h2>
                <p className="mb-4">Tienes derecho a:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Acceder a tu información personal</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Oponerte al procesamiento de tus datos</li>
                  <li>Solicitar la portabilidad de tus datos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Contacto</h2>
                <p>
                  Para consultas sobre esta política de privacidad, contáctanos en:
                </p>
                <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                  <p><strong>Email:</strong> contacto@equipogc.com</p>
                  <p><strong>Teléfono:</strong> +57 320 434 9605</p>
                  <p><strong>Empresa:</strong> GC GROUP COMPANY S.A.S</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}