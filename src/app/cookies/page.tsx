import { Metadata } from "next";
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Política de Cookies | Equipo GC - ConsultansGC",
  description: "Política de cookies de Equipo GC. Información sobre el uso de cookies y tecnologías de rastreo en nuestro sitio web.",
};

export default function CookiesPage() {
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
            <span className="text-gray-300">Política de Cookies</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Política de Cookies
            </h1>
            <p className="text-gray-300 text-lg">
              Información sobre el uso de cookies en nuestro sitio web
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-blue max-w-none">
            <div className="bg-gray-900/50 rounded-lg p-8 space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">¿Qué son las Cookies?</h2>
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando 
                  visitas nuestro sitio web. Nos ayudan a mejorar tu experiencia de navegación y 
                  personalizar el contenido que te mostramos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Tipos de Cookies que Utilizamos</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="font-semibold text-white mb-3">Cookies Esenciales</h3>
                    <p className="mb-2">
                      Necesarias para el funcionamiento básico del sitio web.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Cookies de sesión</li>
                      <li>Cookies de seguridad</li>
                      <li>Cookies de funcionalidad</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="font-semibold text-white mb-3">Cookies de Rendimiento</h3>
                    <p className="mb-2">
                      Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Google Analytics</li>
                      <li>Métricas de rendimiento</li>
                      <li>Análisis de comportamiento</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="font-semibold text-white mb-3">Cookies de Marketing</h3>
                    <p className="mb-2">
                      Utilizadas para mostrar contenido relevante y personalizado.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Redes sociales</li>
                      <li>Publicidad personalizada</li>
                      <li>Seguimiento de conversiones</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Cookies de Terceros</h2>
                <p className="mb-4">
                  Algunos servicios de terceros que utilizamos también pueden establecer cookies:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> Para análisis web y estadísticas</li>
                  <li><strong>Facebook Pixel:</strong> Para seguimiento de conversiones</li>
                  <li><strong>LinkedIn Insight:</strong> Para análisis profesional</li>
                  <li><strong>WhatsApp Business:</strong> Para funcionalidad de chat</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Gestión de Cookies</h2>
                <p className="mb-4">
                  Puedes controlar y gestionar las cookies de varias maneras:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Configuración del navegador para bloquear o eliminar cookies</li>
                  <li>Opciones de privacidad en redes sociales</li>
                  <li>Herramientas de exclusión de Google Analytics</li>
                  <li>Configuración de publicidad personalizada</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Cómo Desactivar las Cookies</h2>
                <div className="bg-gray-800 rounded-lg p-6">
                  <p className="mb-4">
                    Instrucciones para los navegadores más comunes:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                    <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                    <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                    <li><strong>Edge:</strong> Configuración → Privacidad y servicios → Cookies</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Consentimiento</h2>
                <p>
                  Al continuar navegando en nuestro sitio web, aceptas el uso de cookies según 
                  se describe en esta política. Puedes retirar tu consentimiento en cualquier 
                  momento modificando la configuración de tu navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contacto</h2>
                <p>
                  Si tienes preguntas sobre nuestra política de cookies:
                </p>
                <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                  <p><strong>Email:</strong> contacto@equipogc.com</p>
                  <p><strong>Teléfono:</strong> +57 320 434 9605</p>
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