import { Metadata } from "next";
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Aviso Legal | Equipo GC - ConsultansGC",
  description: "Aviso legal de Equipo GC. Información corporativa, registro mercantil y datos de contacto oficial.",
};

export default function AvisoLegalPage() {
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
            <span className="text-gray-300">Aviso Legal</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Aviso Legal
            </h1>
            <p className="text-gray-300 text-lg">
              Información legal y corporativa
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-blue max-w-none">
            <div className="bg-gray-900/50 rounded-lg p-8 space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Información de la Empresa</h2>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-white mb-2">Razón Social</h3>
                      <p>GC GROUP COMPANY S.A.S</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Marca Comercial</h3>
                      <p>Equipo GC - ConsultansGC</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">NIT</h3>
                      <p>[Número de identificación tributaria]</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Registro Mercantil</h3>
                      <p>[Número de registro]</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Datos de Contacto</h2>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-white mb-2">Dirección Postal</h3>
                      <p>Colombia • Costa Rica</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Teléfono</h3>
                      <p>+57 320 434 9605</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Email</h3>
                      <p>contacto@equipogc.com</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Sitio Web</h3>
                      <p>www.equipogc.com</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Objeto Social</h2>
                <p className="mb-4">
                  Equipo GC - ConsultansGC es una agencia especializada en Design Thinking que ofrece servicios de:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Consultoría estratégica empresarial</li>
                  <li>Desarrollo de soluciones tecnológicas</li>
                  <li>Optimización de procesos logísticos</li>
                  <li>Estrategias de marketing B2B</li>
                  <li>Transformación digital</li>
                  <li>Design Thinking y metodologías ágiles</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Ámbito de Operación</h2>
                <p>
                  Nuestra empresa opera principalmente en Colombia y Costa Rica, ofreciendo servicios 
                  tanto presenciales como remotos a nivel internacional.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Propiedad Intelectual</h2>
                <p>
                  Todos los contenidos de este sitio web, incluyendo textos, imágenes, logotipos, 
                  diseños y código fuente, son propiedad de GC GROUP COMPANY S.A.S o se utilizan 
                  bajo licencia. Está prohibida su reproducción sin autorización expresa.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Exención de Responsabilidad</h2>
                <p>
                  La información contenida en este sitio web tiene carácter meramente informativo. 
                  Nos reservamos el derecho de modificar cualquier información sin previo aviso.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}