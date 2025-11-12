import { Metadata } from "next";
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Términos y Condiciones | Equipo GC - ConsultansGC",
  description: "Términos y condiciones de uso de los servicios de Equipo GC. Conoce nuestras políticas y condiciones comerciales.",
};

export default function TerminosCondicionesPage() {
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
            <span className="text-gray-300">Términos y Condiciones</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Términos y Condiciones
            </h1>
            <p className="text-gray-300 text-lg">
              Última actualización: {new Date().toLocaleDateString('es-CO')}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-blue max-w-none">
            <div className="bg-gray-900/50 rounded-lg p-8 space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Aceptación de Términos</h2>
                <p>
                  Al acceder y utilizar los servicios de Equipo GC - ConsultansGC, aceptas estar sujeto a estos 
                  términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, 
                  no debes utilizar nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Servicios Ofrecidos</h2>
                <p className="mb-4">
                  Equipo GC ofrece servicios especializados en:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Consultoría en Design Thinking</li>
                  <li>Estrategias de Marketing B2B</li>
                  <li>Soluciones Logísticas</li>
                  <li>Desarrollo Tecnológico</li>
                  <li>Transformación Digital</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Condiciones Comerciales</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Los precios y condiciones se establecen mediante propuesta comercial específica</li>
                  <li>Los pagos se realizarán según los términos acordados en cada proyecto</li>
                  <li>Los proyectos se ejecutarán según cronograma y alcance definidos</li>
                  <li>Las modificaciones al alcance pueden generar costos adicionales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Propiedad Intelectual</h2>
                <p>
                  Los derechos de propiedad intelectual sobre las metodologías, procesos y materiales 
                  desarrollados por Equipo GC permanecen como propiedad de la empresa, salvo acuerdo 
                  específico en contrario.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Confidencialidad</h2>
                <p>
                  Mantenemos estricta confidencialidad sobre la información de nuestros clientes y 
                  esperamos la misma consideración respecto a nuestras metodologías y procesos internos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Limitación de Responsabilidad</h2>
                <p>
                  Nuestros servicios se proporcionan &quot;tal como están&quot;. No garantizamos resultados específicos, 
                  aunque nos comprometemos a aplicar las mejores prácticas de la industria.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Ley Aplicable</h2>
                <p>
                  Estos términos se rigen por las leyes de Colombia. Cualquier disputa será resuelta 
                  mediante arbitraje según las normas del Centro de Arbitraje y Conciliación de Bogotá.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Contacto</h2>
                <p>
                  Para consultas sobre estos términos y condiciones:
                </p>
                <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                  <p><strong>Email:</strong> contacto@equipogc.com</p>
                  <p><strong>Teléfono:</strong> +57 320 434 9605</p>
                  <p><strong>Empresa:</strong> GC GROUP COMPANY S.A.S</p>
                  <p><strong>Ubicación:</strong> Colombia • Costa Rica</p>
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