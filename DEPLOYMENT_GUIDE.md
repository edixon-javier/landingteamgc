# 🚀 Guía de Despliegue - ConsultansGC Landing

## 📋 Resumen del Proyecto

Landing page de **ConsultansGC** desarrollado con **Next.js 15** y configurado para **exportación estática** compatible con hosting en **Plesk**.

## 🛠️ Configuración Actual

- **Tipo de build**: Estático (HTML/CSS/JS)
- **Optimizado para**: Plesk hosting estático
- **Navegación**: Corregida para dominio personalizado
- **Imágenes**: Optimizadas para build estático

## 🚀 Proceso de Build y Despliegue

### 1. Generar Archivos Estáticos

```bash
# Opción A: Usando el script automatizado
./deploy-static.sh

# Opción B: Comando manual
npm run build:static
```

### 2. Archivos Generados

Después del build encontrarás:
```
📁 out/                    ← Subir TODO este contenido a Plesk
├── 📄 index.html          ← Página principal
├── 📄 404.html            ← Página de error
├── 📁 _next/              ← Assets optimizados
├── 📁 images/             ← Imágenes
├── 📁 videos/             ← Videos
└── 📄 ... (todas las páginas)
```

### 3. Subir a Plesk

**Método recomendado:**
1. Acceder al **Administrador de archivos** de Plesk
2. Navegar a la carpeta `httpdocs/`
3. **Eliminar** contenido anterior
4. **Subir** TODO el contenido de la carpeta `out/`

**Configuración en Plesk:**
- ✅ Tipo: Hosting estático (no Node.js)
- ✅ SSL: Configurar Let's Encrypt
- ✅ Redirección HTTPS: Forzar
- ❌ No necesitas: Aplicación Node.js ni base de datos

## 🔧 Correcciones Aplicadas

### Problema de Navegación Resuelto ✅
- **Antes**: Links incluían `/landingteamgc/` causando errores 404
- **Después**: Navegación limpia para dominio personalizado
- **Archivos corregidos**: `utils.ts`, `useAgendaDemoScroll.ts`, `imageUtils.ts`

### Archivos Optimizados ✅
- **next.config.ts**: Configurado para exportación estática
- **package.json**: Scripts simplificados para build estático
- **Funciones utilitarias**: Limpias de referencias al basePath

## 📊 Verificación Post-Despliegue

Después de subir, verifica:
- [ ] ✅ Sitio carga en `https://tu-dominio.com`
- [ ] ✅ Navegación entre páginas funciona
- [ ] ✅ Enlaces del header funcionan correctamente
- [ ] ✅ Scroll suave desde páginas internas
- [ ] ✅ Imágenes y videos cargan
- [ ] ✅ Formulario de contacto (EmailJS) funciona
- [ ] ✅ SSL/HTTPS activo

## 🎯 URLs de Prueba

```
https://tu-dominio.com/
https://tu-dominio.com/casos-de-exito/
https://tu-dominio.com/casos-de-exito-thinking/
https://tu-dominio.com/aviso-legal/
https://tu-dominio.com/politica-privacidad/
```

## 🔄 Futuras Actualizaciones

Para actualizar el sitio:

```bash
# 1. Realizar cambios en el código
# 2. Generar nuevo build
npm run build:static

# 3. Subir contenido de out/ a Plesk
# 4. Verificar que todo funciona
```

## 📞 Configuración EmailJS

Asegúrate de tener configuradas estas variables:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

## ✅ Estado Actual

- ✅ **Build exitoso**: 23 páginas generadas
- ✅ **Navegación corregida**: Sin errores de basePath
- ✅ **Optimizado**: Para hosting estático en Plesk
- ✅ **Documentado**: Proceso de despliegue claro
- ✅ **Probado**: Build funcional localmente

---

## 🎉 Proyecto Listo

Tu landing page está **100% lista** para subir a Plesk como sitio estático. Solo necesitas subir el contenido de la carpeta `out/` y configurar SSL.

**¡Tu sitio funcionará perfectamente en `https://portfolio.equipogctrade.com`! 🚀**

---
*Última actualización: 12 de noviembre de 2025*