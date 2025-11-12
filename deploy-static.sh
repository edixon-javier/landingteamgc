#!/bin/bash

# Script de despliegue estático para Plesk
# Este script genera los archivos estáticos listos para subir a Plesk

# Colores para los mensajes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}===========================================${NC}"
echo -e "${BLUE}   BUILD ESTÁTICO PARA PLESK${NC}"
echo -e "${BLUE}===========================================${NC}"

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: No se encontró package.json. Asegúrate de ejecutar este script desde la raíz del proyecto.${NC}"
    exit 1
fi

# 1. Configurar entorno de producción
echo -e "${YELLOW}1. Configurando entorno de producción...${NC}"
export NODE_ENV=production

# 2. Limpiar build anterior
echo -e "${YELLOW}2. Limpiando build anterior...${NC}"
rm -rf .next/
rm -rf out/

# 3. Instalar dependencias (solo si no existen)
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}3. Instalando dependencias...${NC}"
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}Error al instalar dependencias. Abortando.${NC}"
        exit 1
    fi
else
    echo -e "${YELLOW}3. Dependencias ya instaladas ✓${NC}"
fi

# 4. Construir la aplicación estática
echo -e "${YELLOW}4. Construyendo aplicación estática...${NC}"
npm run build:static

if [ $? -ne 0 ]; then
    echo -e "${RED}Error durante la construcción. Abortando.${NC}"
    exit 1
fi

# 5. Verificar que se generó la carpeta out
echo -e "${YELLOW}5. Verificando build...${NC}"
if [ ! -d "out" ]; then
    echo -e "${RED}Error: No se generó la carpeta 'out'${NC}"
    exit 1
fi

# 6. Crear archivo .nojekyll para evitar procesamiento Jekyll
echo -e "${YELLOW}6. Creando archivo .nojekyll...${NC}"
touch out/.nojekyll

# 7. Crear archivo de información del build
echo -e "${YELLOW}7. Creando información del build...${NC}"
cat > out/build-info.txt << EOF
Build generado: $(date)
Tipo: Estático (out)
Entorno: Producción
Node.js: $(node --version)
NPM: $(npm --version)
Listo para subir a Plesk
EOF

# 8. Mostrar estadísticas del build
echo -e "${YELLOW}8. Estadísticas del build:${NC}"
echo -e "📁 Archivos generados: $(find out -type f | wc -l)"
echo -e "📦 Tamaño total: $(du -sh out | cut -f1)"
echo -e "📄 Páginas HTML: $(find out -name "*.html" | wc -l)"

# 9. Crear archivo ZIP para fácil subida
echo -e "${YELLOW}9. Creando archivo ZIP para subida...${NC}"
cd out
zip -r ../landingteamgc-static-$(date +%Y%m%d-%H%M).zip . -x "*.DS_Store*" "*.git*"
cd ..

echo -e "${GREEN}✅ Build estático completado exitosamente${NC}"
echo -e "${GREEN}===========================================${NC}"
echo -e "${GREEN}ARCHIVOS LISTOS PARA PLESK:${NC}"
echo -e "📁 Carpeta: ${YELLOW}out/${NC}"
echo -e "📦 ZIP: ${YELLOW}landingteamgc-static-$(date +%Y%m%d-%H%M).zip${NC}"
echo -e "${GREEN}===========================================${NC}"

echo -e "${BLUE}PASOS PARA SUBIR A PLESK:${NC}"
echo -e "1. ${YELLOW}Opción A - Subir carpeta completa:${NC}"
echo -e "   - Accede al Administrador de archivos de Plesk"
echo -e "   - Ve a la carpeta httpdocs/"
echo -e "   - Sube TODO el contenido de la carpeta 'out/'"
echo -e ""
echo -e "2. ${YELLOW}Opción B - Subir archivo ZIP:${NC}"
echo -e "   - Sube el archivo landingteamgc-static-*.zip"
echo -e "   - Extráelo en httpdocs/"
echo -e ""
echo -e "3. ${YELLOW}Configurar en Plesk:${NC}"
echo -e "   - No necesitas aplicación Node.js"
echo -e "   - Solo hosting estático (Apache/Nginx)"
echo -e "   - Configurar SSL si es necesario"

echo -e "${GREEN}¡Tu sitio estático está listo! 🚀${NC}"
echo -e "${GREEN}URL: https://tu-dominio.com${NC}"