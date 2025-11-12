# ConsultansGC Landing Page

Landing page empresarial desarrollada con **Next.js 15** para ConsultansGC, optimizada para despliegue estático en Plesk hosting.

## 🚀 Build y Despliegue

### Generar archivos estáticos:
```bash
npm run build:static
# O usar el script automatizado:
./deploy-static.sh
```

### Subir a Plesk:
1. Subir TODO el contenido de `out/` a `httpdocs/`
2. Configurar SSL (Let's Encrypt)
3. Verificar funcionamiento

## 📖 Documentación Completa

Ver **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** para:
- Guía paso a paso de despliegue
- Correcciones aplicadas
- Verificación post-despliegue
- Configuración EmailJS

## 🛠️ Desarrollo

```bash
# Desarrollo
npm run dev

# Build estático para producción
npm run build:static

# Tests
npm test
```

## ✅ Estado Actual

- ✅ Navegación corregida (sin basePath)
- ✅ Build estático optimizado  
- ✅ Listo para Plesk hosting
- ✅ 23 páginas generadas correctamente

**¡Proyecto listo para producción! 🎉**
