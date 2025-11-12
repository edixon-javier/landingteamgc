"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useContactForm } from "@/lib/emailService";

import {
  fadeIn,
  slideUp as sectionVariants
} from '@/animations/variants';

export function CTA() {
  const { isLoading, message, handleSubmit, clearMessage } = useContactForm();

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
                  <MapPin className="h-6 w-6 text-sky-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Ciudad de Panamá, Panamá</h3>
                    <p className="text-gray-600">Torre Empresarial</p>
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
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Listo para dar el siguiente paso?</h3>
              <p className="text-gray-600">Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.</p>
            </div>

            {/* Mensaje de estado */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl flex items-center gap-3 ${
                  message.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {message.type === 'success' ? (
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                )}
                <span className="text-sm font-medium">{message.text}</span>
                <button
                  onClick={clearMessage}
                  className="ml-auto text-gray-400 hover:text-gray-600"
                  aria-label="Cerrar mensaje"
                >
                  ×
                </button>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campos visibles para el usuario */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="from_name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    id="from_name"
                    autoComplete="name"
                    placeholder="Tu nombre"
                    required
                    className="block w-full px-4 py-3 text-gray-900 placeholder-gray-400 
                    bg-gray-50 border border-gray-200 rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 
                    focus:bg-white transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="from_email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    id="from_email"
                    autoComplete="email"
                    placeholder="tucorreo@empresa.com"
                    required
                    className="block w-full px-4 py-3 text-gray-900 placeholder-gray-400 
                    bg-gray-50 border border-gray-200 rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 
                    focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>
              
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Nombre de tu empresa"
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
                  rows={7}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                  className="block w-full px-4 py-3 text-gray-900 placeholder-gray-400 
                  bg-gray-50 border border-gray-200 rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 
                  focus:bg-white transition-all duration-200 resize-none"
                ></textarea>
              </div>

              {/* Campos ocultos para EmailJS */}
              <input type="hidden" name="title" value="Nuevo mensaje de contacto desde la landing page" />
              <input type="hidden" name="time" value="" />
              <input type="hidden" name="reply_to" value="" />
              <input type="hidden" name="name" value="" />
              <input type="hidden" name="email" value="" />

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    className="h-4 w-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    Acepto la <a href="#" className="text-sky-600 hover:text-sky-800">política de privacidad</a> y el tratamiento de mis datos
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    variant="default"
                    disabled={isLoading}
                    className="w-full py-6 text-lg font-medium bg-sky-600 text-white
                    hover:bg-sky-700 shadow-xl shadow-sky-600/10
                    hover:shadow-2xl hover:shadow-sky-600/20 
                    focus:ring-2 focus:ring-offset-2 focus:ring-sky-600
                    transition-all duration-300 rounded-xl
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-sky-600"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      'Enviar Mensaje'
                    )}
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
