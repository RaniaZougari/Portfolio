import emailjs from '@emailjs/browser';

// Configuration EmailJS
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Initialiser EmailJS
export const initEmailJS = () => {
  if (!EMAILJS_CONFIG.publicKey || EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY_HERE') {
    console.warn('⚠️ EmailJS non configuré. Veuillez créer un fichier .env avec vos clés EmailJS.');
    return false;
  }
  emailjs.init(EMAILJS_CONFIG.publicKey);
  return true;
};

// Fonction pour envoyer un email
export const sendContactEmail = async (formData) => {
  // Vérifier que EmailJS est configuré
  if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
    return {
      success: false,
      error: 'EmailJS non configuré. Veuillez créer un fichier .env avec vos clés.'
    };
  }

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'rania.zougari@gmail.com', // Votre email pour recevoir les messages
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    return { success: true, response };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return { success: false, error: error.message || 'Erreur inconnue' };
  }
};
