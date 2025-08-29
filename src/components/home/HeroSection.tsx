"use client";
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getVideoPath } from '@/lib/utils';

export const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center text-center text-white overflow-hidden">
      {/* Video de fondo con efecto mejorado */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0  scale-105"
      >
        <source src={getVideoPath("/assets/videos/equipogc.mp4")} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      
      {/* Overlay con gradiente mejorado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>
      
      {/* Contenido principal */}
      <div className="relative z-20 px-4 max-w-5xl mx-auto">

        {/* Título principal animado con elementos destacados */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight"
        >
          Integramos{' '}
          <span className="text-sky-400 relative">
            Estrategia
            <motion.svg
              width="100%"
              height="8"
              viewBox="0 0 300 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-2 left-0 w-full"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <path
                d="M1 5.5C50 2.5 150 2.5 299 5.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </motion.svg>
          </span>
          ,{' '}
          <span className="text-purple-400">Logística</span> y{' '}
          <span className="text-emerald-400">Tecnología</span>.
        </motion.h1>
        
        {/* Subtítulo animado con mejor contraste */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          Resolvemos desafíos de negocio complejos aplicando{' '}
          <span className="text-purple-300 font-semibold">Design Thinking</span>{' '}
          para crear soluciones que generan{' '}
          <span className="text-emerald-300 font-semibold">resultados medibles</span>.
        </motion.p>
        
        {/* Botones CTA con efectos mejorados */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Botón Principal */}
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold px-8 py-6 rounded-xl
                      shadow-lg shadow-sky-600/20 hover:shadow-xl hover:shadow-sky-600/30 
                      hover:scale-105 active:scale-95 transition-all duration-300 ease-out
                      border-none"
          >
            <a href="#contacto" className="flex items-center">
              Agenda tu Sesión Estratégica
            </a>
          </Button>

          {/* Botón Secundario */}
          <Button
            size="lg"
            variant="outline"
            asChild
            className="group border-2 border-white/20 text-white font-semibold px-8 py-6 rounded-xl 
                      backdrop-blur-sm hover:bg-white/10 hover:border-white/30 hover:shadow-lg 
                      active:scale-95 transition-all duration-300 ease-out"
          >
            <a href="#casos-de-exito" className="flex items-center">
              <span>Ver Casos de Éxito</span>
              <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
};