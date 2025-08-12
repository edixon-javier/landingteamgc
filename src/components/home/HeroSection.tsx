"use client";
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getVideoPath } from '@/lib/utils';
// Ya no necesitas 'useState' aquí.

export const HeroSection = () => {
  // ¡La función scrollToSection ya no es necesaria! ✨

  return (
    <section className="min-h-screen relative flex items-center justify-center text-center text-white overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
      >
        <source src={getVideoPath("/assets/videos/equipogc.mp4")} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Contenido principal */}
      <div className="relative z-20 px-4 max-w-4xl mx-auto">
        {/* Título principal animado */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight"
        >
          Integramos Estrategia, Logística y Tecnología.
        </motion.h1>
        
        {/* Subtítulo animado */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/80"
        >
          Resolvemos desafíos de negocio complejos aplicando Design Thinking para crear soluciones que generan resultados medibles.
        </motion.p>
        
        {/* Botones CTA mejorados 🚀 */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Botón Principal */}
            <Button
              size="lg"
              asChild
              className="bg-white text-[#101828] font-semibold px-8 py-4 rounded-xl shadow-lg 
                        hover:bg-gray-100 hover:shadow-xl hover:scale-105 
                        active:scale-95 transition-all duration-300 ease-out"
            >
              <a href="#contacto">
                Agenda tu Sesión Estratégica
              </a>
            </Button>

            {/* Botón Secundario */}
            <Button
              size="lg"
              variant="outline"
              asChild
              className="group border-2 border-white text-white font-semibold px-8 py-4 rounded-xl 
                        hover:bg-white hover:text-[#101828] hover:shadow-lg 
                        active:scale-95 transition-all duration-300 ease-out"
            >
              <a href="#casos-de-exito" className="flex items-center">
                <span>Ver Casos de Éxito</span>
                <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

      </div>
    </section>
  );
};