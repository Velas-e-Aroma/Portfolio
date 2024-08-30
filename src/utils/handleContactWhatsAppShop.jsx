import contact from '../context/contact';

export default function handleContactWhatsAppShop(candleName) {
  // Verifica se o número de telefone existe e está formatado corretamente
  const phoneNumber = contact[0].phone;

  if (!phoneNumber) {
    console.error('Número de telefone não encontrado.');
    return;
  }

  // Remove quaisquer caracteres especiais, como espaços, parênteses ou hifens
  const formattedPhoneNumber = phoneNumber.replace(/[\s()-]/g, '');

  // Codifica a mensagem para ser utilizada na URL
  const message = encodeURIComponent(`Gostei da vela ${candleName} e queria saber mais sobre.`);

  // Envia para o WhatsApp
  window.open(
    `https://wa.me/${formattedPhoneNumber}?text=${message}`,
    '_blank'
  );
}
