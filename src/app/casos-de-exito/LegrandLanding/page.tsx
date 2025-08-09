"use client";

import React from "react";
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';

export default function LegrandLanding() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Legrand Digital Transformation</h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center mb-8">
          Página de ejemplo para el caso de éxito de Legrand. Aquí puedes mostrar detalles, imágenes y resultados del proyecto.
        </p>
        {/* Agrega aquí el contenido real del caso de éxito */}
      </main>
      <Footer />
    </div>
  );
}
