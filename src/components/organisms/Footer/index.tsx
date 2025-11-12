import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, MessageSquare, Mail, MapPin, Phone } from 'lucide-react';
import { getImagePath } from '@/lib/utils';

export function Footer() {
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/equipogc',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/equipogc',
      icon: Instagram,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/573204349605',
      icon: MessageSquare,
    },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Soluciones', href: '/#soluciones' },
    { name: 'Metodología', href: '/#metodologia' },
    { name: 'Casos de Éxito', href: '/#casos-de-exito' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  const services = [
    { name: 'Desarrollo y Tecnología', href: '/casos-de-exito' },
    { name: 'Estrategia y Design Thinking', href: '/casos-de-exito-thinking' },
  ];


  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Logo y Descripción */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group">
              <Image
                className="h-12 w-auto filter brightness-0 invert transition-all duration-300 group-hover:scale-105"
                src={getImagePath("/images/logogc.svg")}
                alt="Equipo GC Logo"
                width={140}
                height={48}
              />
            </Link>
            <p className="mt-6 text-gray-300 leading-relaxed max-w-md">
              Agencia de Design Thinking especializada en integrar estrategia, logística y tecnología para transformar ideas en realidades digitales impactantes.
            </p>
            
            {/* Información de Contacto */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span className="text-sm">Colombia • Costa Rica</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <a href="tel:+573204349605" className="text-sm hover:text-white transition-colors">
                  +57 320 434 9605
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <a href="mailto:contacto@equipogc.com" className="text-sm hover:text-white transition-colors">
                  contacto@equipogc.com
                </a>
              </div>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Navegación
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Servicios
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media y Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Conecta con Nosotros
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <div className="flex gap-3 mb-8">
              {socialLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className="group relative p-3 bg-gray-800 rounded-xl hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                  
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>

          </div>
        </div>



        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-900 px-4 text-gray-600 text-xs">◆</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div className="text-center lg:text-left">
            <p>&copy; {new Date().getFullYear()} Equipo GC - ConsultansGC. Todos los derechos reservados.</p>
            <p className="mt-1 text-xs">
              Equipo GC es una marca registrada de <span className="text-gray-400">GC GROUP COMPANY S.A.S ®</span>
            </p>
            <p className="mt-1 text-xs text-gray-600">
              Agencia de Design Thinking | Colombia & Costa Rica
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs text-center">
            <div className="flex gap-6">
              <Link href="/politica-privacidad" className="hover:text-white transition-colors duration-200">
                Política de Privacidad
              </Link>
              <Link href="/terminos-condiciones" className="hover:text-white transition-colors duration-200">
                Términos y Condiciones
              </Link>
            </div>
            <div className="flex gap-6">
              <Link href="/aviso-legal" className="hover:text-white transition-colors duration-200">
                Aviso Legal
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors duration-200">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
    </footer>
  );
}