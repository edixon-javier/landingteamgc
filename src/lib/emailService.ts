import emailjs from '@emailjs/browser';
import { useState } from 'react';

// Configuración de EmailJS
export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
};

// Inicializar EmailJS con la clave pública
if (typeof window !== 'undefined' && emailConfig.publicKey) {
  emailjs.init(emailConfig.publicKey);
}

// Función para enviar email usando EmailJS con sendForm
export const sendContactEmailForm = async (
  formElement: HTMLFormElement
): Promise<{ success: boolean; message: string }> => {
  try {
    // Validar que las variables de entorno estén configuradas
    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      throw new Error('EmailJS no está configurado correctamente. Verifica las variables de entorno.');
    }

    // Enviar el formulario usando sendForm (como en tu ejemplo)
    const response = await emailjs.sendForm(
      emailConfig.serviceId,
      emailConfig.templateId,
      formElement,
      emailConfig.publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.',
      };
    } else {
      throw new Error('Error al enviar el mensaje');
    }
  } catch (error) {
    console.error('Error al enviar email:', error);
    return {
      success: false,
      message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos directamente.',
    };
  }
};

// Hook personalizado para manejar el estado del formulario
export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const data = {
      name: formData.get('from_name') as string,
      email: formData.get('from_email') as string,
      message: formData.get('message') as string,
    };

    // Validación básica
    if (!data.name || !data.email || !data.message) {
      setMessage({
        type: 'error',
        text: 'Por favor, completa todos los campos requeridos.',
      });
      setIsLoading(false);
      return;
    }

    // Llenar campos ocultos automáticamente antes del envío
    const timeInput = formElement.querySelector('input[name="time"]') as HTMLInputElement;
    const replyToInput = formElement.querySelector('input[name="reply_to"]') as HTMLInputElement;
    const nameInput = formElement.querySelector('input[name="name"]') as HTMLInputElement; 
    const emailInput = formElement.querySelector('input[name="email"]') as HTMLInputElement;

    if (timeInput) timeInput.value = new Date().toLocaleString('es-CO');
    if (replyToInput) replyToInput.value = data.email;
    if (nameInput) nameInput.value = data.name;
    if (emailInput) emailInput.value = data.email;

    // Usar sendForm como en tu ejemplo de EmailJS
    const result = await sendContactEmailForm(formElement);
    
    setMessage({
      type: result.success ? 'success' : 'error',
      text: result.message,
    });

    if (result.success) {
      // Limpiar el formulario
      formElement.reset();
    }

    setIsLoading(false);
  };

  return {
    isLoading,
    message,
    handleSubmit,
    clearMessage: () => setMessage(null),
  };
};