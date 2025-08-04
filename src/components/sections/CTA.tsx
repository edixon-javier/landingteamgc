"use client";

import { motion, easeOut  } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut  } },
};

export function CTA() {
  return (
    <section id="contacto" className="bg-white py-16 sm:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna de Información */}
          <div className="text-gray-900">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              ¿Listo para transformar tu próximo desafío?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hablemos. Nuestro equipo de estrategas está listo para escuchar tus ideas y convertirlas en proyectos de alto impacto. 
              Completa el formulario o contáctanos directamente.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Bogotá D.C., Colombia</h3>
                  <p className="text-gray-600">Carrera 18B # 5A-19</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">San José, Costa Rica</h3>
                  <p className="text-gray-600">
                    Yoses Sur, Edificio Mira 25 Oeste 75 sur
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Móvil</h3>
                  <p className="text-gray-600">+57 313 420 4943</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">Desarrollos@equipogc.co</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna del Formulario Mejorada */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  placeholder="Ingresa tu nombre completo"
                  className="block w-full px-4 py-3 text-gray-900 placeholder-gray-400 
                  border border-gray-300 rounded-lg shadow-sm 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  placeholder="Nombre de tu empresa"
                  className="block w-full px-4 py-3 text-gray-900 placeholder-gray-400 
                  border border-gray-300 rounded-lg shadow-sm 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-1"
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
                  border border-gray-300 rounded-lg shadow-sm 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  ¿Cómo podemos ayudarte?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Escribe tu mensaje..."
                  className="block w-full px-4 py-3 text-gray-900 placeholder-gray-400 
                  border border-gray-300 rounded-lg shadow-sm 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                ></textarea>
              </div>

              <div>
                <Button
                  type="submit"
                  size="lg"
                  variant="default"
                  className="w-full font-semibold shadow-md hover:shadow-lg transition 
                  bg-[#101828] text-white 
                  hover:bg-[#1c2538] active:bg-[#0c121d] focus:ring-2 focus:ring-offset-2 focus:ring-[#101828]"
                >
                  Enviar Mensaje
              </Button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
