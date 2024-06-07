import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export default async function handler(request, response) {
  try {
      const { name, email,message } = await request.json();

      await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [email],
        subject: 'Hello world',
      });
      console.log('fuck u!')

      return response.status(200);
  } catch (error) {
      return response.status(500).json({ message: "Failed to Send Email" })
  }
}