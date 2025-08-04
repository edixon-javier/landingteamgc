// Utilidad para normalizar nombres de archivos
function normalizeFileName(path) {
  // Asegurarse de que la ruta comience con '/'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Convertir espacios a guiones y normalizar nombre de archivo
  return normalizedPath.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/--/g, '-');
}

// Buscar en los archivos de contenido y reemplazar las rutas
const fs = require('fs');
const path = require('path');

// Archivos a procesar
const filesToProcess = [
  path.join(__dirname, 'src/lib/content.ts'),
  path.join(__dirname, 'src/lib/data.ts'),
];

// Procesar cada archivo
filesToProcess.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Buscar rutas de archivos entre comillas
    const regex = /(["'])(\/?(?:images|projects|videos)\/[^"']+\.(?:png|jpg|jpeg|gif|svg|mp4|webm|txt))\1/g;
    
    // Reemplazar con rutas normalizadas
    content = content.replace(regex, (match, quote, filePath) => {
      const normalizedPath = normalizeFileName(filePath);
      return `${quote}${normalizedPath}${quote}`;
    });
    
    // Guardar el archivo modificado
    fs.writeFileSync(filePath, content);
    console.log(`Procesado: ${filePath}`);
  } else {
    console.log(`Archivo no encontrado: ${filePath}`);
  }
});

console.log('Proceso completado.');
