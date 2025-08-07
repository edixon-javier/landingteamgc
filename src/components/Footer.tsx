import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, MessageSquare } from 'lucide-react'; 
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

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo y Tagline */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <Link href="/">
              <Image
                className="h-10 w-auto mx-auto md:mx-0 filter brightness-0 invert"
                src={getImagePath("/assets/icons/logogc.svg")}
                alt="Equipo GC Logo"
                width={120}
                height={40}
                />
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Integrando Estrategia, Logística y Tecnología.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright y legales */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Equipo GC. Todos los derechos reservados.</p>
          <p className="mt-1">Equipo GC es una marca GC GROUP COMPANY S.A.S ®</p>
        </div>
      </div>
    </footer>
  );
}
