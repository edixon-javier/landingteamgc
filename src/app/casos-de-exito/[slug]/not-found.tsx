import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Proyecto no encontrado</h2>
        <p className="text-gray-600 mb-8">
          Lo sentimos, el proyecto que estás buscando no existe o ha sido movido.
        </p>
        <Link 
          href="/casos-de-exito" 
          className="inline-flex items-center px-4 py-2 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors rounded-md"
        >
          Ver todos los proyectos
        </Link>
      </div>
    </div>
  );
}
