# Configuración de EmailJS para el Formulario de Contacto

Este documento explica cómo configurar EmailJS para habilitar el envío de correos electrónicos desde el formulario de contacto.

## 🚀 Instalación Completada

La librería EmailJS ya está instalada en el proyecto:
```bash
npm install @emailjs/browser
```

## 📧 Configuración de EmailJS

### Paso 1: Crear cuenta en EmailJS
1. Ve a [emailjs.com](https://www.emailjs.com)
2. Regístrate o inicia sesión
3. Accede al dashboard

### Paso 2: Configurar un Servicio de Email
1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor (Gmail, Outlook, Yahoo, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. **Guarda el Service ID** que se genera

### Paso 3: Crear una Plantilla de Email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Usa esta plantilla sugerida:

```html
Subject: Nuevo mensaje de contacto desde {{from_name}}

Hola,

Has recibido un nuevo mensaje de contacto desde la landing page:

Nombre: {{from_name}}
Email: {{from_email}}
Empresa: {{company}}

Mensaje:
{{message}}

---
Este email fue enviado automáticamente desde el formulario de contacto.
Para responder, puedes escribir directamente a: {{reply_to}}
```

4. **Guarda el Template ID** que se genera

### Paso 4: Obtener la Clave Pública
1. Ve a "Account" en el menú
2. Copia tu **Public Key**

### Paso 5: Configurar Variables de Entorno
1. Abre el archivo `.env.local` en la raíz del proyecto
2. Reemplaza los valores vacíos con tus datos reales:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

### Paso 6: Configurar la Plantilla con Variables
En la plantilla de EmailJS, puedes usar cualquiera de estas variables disponibles:

#### Variables principales:
- `{{from_name}}` - Nombre del remitente
- `{{from_email}}` - Email del remitente  
- `{{company}}` - Empresa del remitente
- `{{message}}` - Mensaje del formulario

#### Variables adicionales generadas automáticamente:
- `{{title}}` - Título del mensaje (fijo: "Nuevo mensaje de contacto desde la landing page")
- `{{time}}` - Fecha y hora del envío
- `{{reply_to}}` - Email para respuesta (copia del from_email)
- `{{name}}` - Copia del nombre (para compatibilidad)
- `{{email}}` - Copia del email (para compatibilidad)

### Ejemplo de Plantilla EmailJS actualizada:
```html
Subject: {{title}} - {{from_name}}

Hola,

{{title}}

Detalles del contacto:
- Nombre: {{from_name}}
- Email: {{from_email}}
- Empresa: {{company}}
- Fecha: {{time}}

Mensaje:
{{message}}

---
Este email fue enviado automáticamente desde el formulario de contacto.
Para responder, puedes escribir directamente a: {{reply_to}}
```

## 🔧 Configuración Adicional

### Cambiar Email de Destino
Si quieres cambiar el email donde llegan los mensajes, modifica la línea 30 en `src/lib/emailService.ts`:

```typescript
to_email: 'tu-nuevo-email@dominio.com', // Cambia este email
```

### Personalizar Mensajes
Puedes personalizar los mensajes de éxito y error en `src/lib/emailService.ts` en las funciones correspondientes.

## 🧪 Pruebas

1. **Reinicia el servidor de desarrollo** para cargar las nuevas variables de entorno:
```bash
npm run dev
```

2. Ve a la sección de contacto en tu página (`http://localhost:3000/#contacto`)

3. Completa el formulario de prueba:
   - **Nombre**: Tu nombre
   - **Email**: Tu email (donde quieres recibir confirmación)
   - **Empresa**: Nombre de prueba
   - **Mensaje**: "Probando el formulario de contacto"

4. **Observa el comportamiento**:
   - El botón debe cambiar a "Enviando..." mientras se procesa
   - Debe aparecer un mensaje de éxito o error
   - Si es exitoso, el formulario se limpia automáticamente

5. **Verifica que recibes el email** en el correo configurado en EmailJS

### Debug en la Consola del Navegador
Si hay problemas, abre las **Herramientas de Desarrollador** (F12) y revisa:
- La pestaña **Console** para errores de JavaScript
- La pestaña **Network** para ver las peticiones a EmailJS

## 🔒 Seguridad

- Las variables que empiezan con `NEXT_PUBLIC_` son visibles en el frontend
- EmailJS maneja la autenticación de forma segura
- No expongas credenciales sensibles en el código

## 🐛 Solución de Problemas

### Error: "EmailJS no está configurado correctamente"
- Verifica que todas las variables de entorno estén configuradas
- Asegúrate de reiniciar el servidor después de agregar las variables

### Los emails no llegan
- Verifica que el Service ID, Template ID y Public Key sean correctos
- Revisa la bandeja de spam
- Verifica que el servicio de email esté activo en EmailJS

### Error de CORS
- EmailJS maneja CORS automáticamente
- Si hay problemas, verifica la configuración del dominio en EmailJS

## 📝 Estructura de Archivos

```
src/
├── lib/
│   └── emailService.ts          # Configuración y lógica de EmailJS
├── components/
│   └── sections/
│       └── CTA.tsx              # Componente del formulario con EmailJS
└── ...
```

## 🎯 Funcionalidades Implementadas

✅ Envío de emails con EmailJS
✅ Validación de formulario
✅ Estados de carga y mensajes de éxito/error  
✅ Limpieza automática del formulario después del envío
✅ Campos requeridos con validación
✅ Configuración mediante variables de entorno
✅ Hook personalizado para manejo del estado
✅ Interfaz responsive y accesible

## 📞 Soporte

Si necesitas ayuda adicional con la configuración, puedes contactar al equipo de desarrollo.