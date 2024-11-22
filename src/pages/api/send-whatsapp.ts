import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { message, phoneNumber } = req.body;

    // Aquí deberías incluir la lógica para enviar el mensaje a WhatsApp
    // Esto generalmente implica hacer una solicitud a la API de WhatsApp Business

    try {
      // Este es un ejemplo simplificado. Necesitarás reemplazar esto con la llamada real a la API de WhatsApp
      const response = await fetch('https://graph.facebook.com/v13.0/YOUR_PHONE_NUMBER_ID/messages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: phoneNumber,
          type: "text",
          text: { body: message }
        })
      });

      if (response.ok) {
        res.status(200).json({ success: true });
      } else {
        res.status(500).json({ success: false, error: 'Error al enviar mensaje a WhatsApp' });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: 'Error al procesar la solicitud' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

