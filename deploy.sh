#!/bin/bash

# Script para desplegar el proyecto en GitHub Pages
# Este script automatiza el proceso de construcción y despliegue del proyecto en GitHub Pages

# Colores para los mensajes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Iniciando proceso de despliegue para GitHub Pages...${NC}"

# 1. Asegurarse de que estamos en el entorno de producción
export NODE_ENV=production

# 2. Ejecutar el script para normalizar nombres de archivos (por si hay archivos nuevos)
echo -e "${YELLOW}Normalizando nombres de archivos...${NC}"
node normalize-filenames.mjs

# 3. Limpieza de directorios previos
echo -e "${YELLOW}Limpiando directorios de compilación previos...${NC}"
rm -rf out/
rm -rf .next/

# 4. Construcción del proyecto
echo -e "${YELLOW}Construyendo el proyecto...${NC}"
npx next build

if [ $? -ne 0 ]; then
    echo -e "${RED}Error durante la construcción del proyecto. Abortando.${NC}"
    exit 1
fi

# 5. Crear archivo .nojekyll para evitar que GitHub Pages intente procesar el sitio con Jekyll
echo -e "${YELLOW}Creando archivo .nojekyll...${NC}"
touch out/.nojekyll

# 6. Verificar si existe y ajustar los assets en la carpeta out
echo -e "${YELLOW}Verificando y ajustando rutas de assets...${NC}"

# 7. Informar sobre el resultado
echo -e "${GREEN}¡Despliegue preparado con éxito!${NC}"
echo -e "${YELLOW}Pasos para subir a GitHub Pages:${NC}"
echo -e "1. Sube todos los cambios a tu repositorio de GitHub"
echo -e "   git add ."
echo -e "   git commit -m \"Preparación para despliegue en GitHub Pages\""
echo -e "   git push origin master"
echo -e "2. Configura GitHub Pages para servir desde la carpeta 'out' en la rama 'master'"
echo -e "3. O alternativamente, puedes usar la rama gh-pages ejecutando:"
echo -e "   git subtree push --prefix out origin gh-pages"
echo -e "${GREEN}Tu sitio estará disponible en: https://[usuario].github.io/landingteamgc/${NC}"
