#!/bin/bash

# Limpieza previa
echo "Limpiando directorios previos..."
rm -rf .next out

# Asegurarse de que .nojekyll existe en la raíz
touch .nojekyll

# Construir el proyecto
echo "Construyendo el proyecto..."
npm run build

# Asegurarse de que .nojekyll se copió a la carpeta out
touch out/.nojekyll

# Verificar que los archivos críticos existen
echo "Verificando archivos..."
if [ ! -f "out/.nojekyll" ]; then
    echo "ERROR: Falta el archivo .nojekyll en la carpeta out"
    exit 1
fi

if [ ! -d "out/_next" ]; then
    echo "ERROR: Falta la carpeta _next en out"
    exit 1
fi

# Imprimir algunos archivos para verificar
echo "Archivos en la carpeta out:"
ls -la out/

echo "Archivos de imágenes:"
find out -name "*.png" | head -n 5

echo "Build completado exitosamente. Contenido listo para subir a GitHub Pages."
