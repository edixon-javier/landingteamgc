"use client";

import { motion, easeOut, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

import {
  fadeIn,
  slideUp as sectionVariants
} from '@/animations/variants';

export function CTA() {
  return (
    <section id="contacto" className="relative bg-gradient-to-b from-white to-gray-50 py-20 sm:py-32 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent,white)] opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-transparent to-purple-50/50" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Columna de Información */}
          <div className="lg:sticky lg:top-8">
            <motion.div variants={fadeIn} className="space-y-8">
              <div className="inline-block px-6 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-4">
                CONTÁCTANOS
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                Hablemos de tu{' '}
                <span className="relative text-sky-600">
                  próximo gran proyecto
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600/20"></span>
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-lg">
                Nuestro equipo está listo para escuchar tus ideas y convertirlas en soluciones de alto impacto. Completa el formulario o contáctanos directamente.
              </p>

              <div className="space-y-8 pt-4">
                <div className="flex items-start gap-6 group">
                  <MapPin className="h-6 w-6 text-sky-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Bogotá D.C., Colombia</h3>
                    <p className="text-gray-600">Carrera 18B # 5A-19</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <MapPin className="h-6 w-6 text-sky-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">San José, Costa Rica</h3>
                    <p className="text-gray-600">Yoses Sur, Edificio Mira 25 Oeste 75 sur</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <Phone className="h-6 w-6 text-sky-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Móvil</h3>
                    <p className="text-gray-600">+57 313 420 4943</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <Mail className="h-6 w-6 text-sky-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Email</h3>
                    <p className="text-gray-600">Desarrollos@equipogc.co</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Columna del Formulario */}
          <motion.div 
            variants={fadeIn}
            className="bg-white p-8 lg:p-12 rounded-2xl shadow-2xl shadow-sky-900/5 border border-gray-100/50 backdrop-blur-sm"
          >
            <form action="#" method="POST" className="space-y-8">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="tucorreo@empresa.com"
                    className="block w-full px-4 py-3 text-gray-900 placeholder-gray-400 
                    bg-gray-50 border border-gray-200 rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 
                    focus:bg-white transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    ¿Cómo podemos ayudarte?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="block w-full px-4 py-3 text-gray-900 placeholder-gray-400 
                    bg-gray-50 border border-gray-200 rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 
                    focus:bg-white transition-all duration-200 resize-none"
                  ></textarea>
                </div>
              </div>

              <div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    variant="default"
                    className="w-full py-6 text-lg font-medium bg-sky-600 text-white
                    hover:bg-sky-700 shadow-xl shadow-sky-600/10
                    hover:shadow-2xl hover:shadow-sky-600/20 
                    focus:ring-2 focus:ring-offset-2 focus:ring-sky-600
                    transition-all duration-300 rounded-xl"
                  >
                    Enviar Mensaje
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
