import contact from "../context/contact";

export default function handleContactWhatsApp() {
  // Verifica se o número de telefone existe e está formatado corretamente
  const phoneNumber = contact[0].phone;

  if (!phoneNumber) {
    console.error('Número de telefone não encontrado.');
    return;
  }

  // Remove quaisquer caracteres especiais, como espaços, parênteses ou hifens
  const formattedPhoneNumber = phoneNumber.replace(/[\s()-]/g, '');

  // Envia para o WhatsApp
  window.open(`https://wa.me/${formattedPhoneNumber}`, '_blank');
}
