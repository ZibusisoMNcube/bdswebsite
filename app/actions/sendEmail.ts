"use server"
import { error } from "console";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) =>  {

  const message = formData.get('message');
  const name = formData.get('name');
  const email = formData.get('email')

  if(!message || typeof message !== "string")
    {
      return {
        error: "Invalid meassage"
      }
    }

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "baobabsolutions59@gmail.com",
    subject: "Message from potential client",
    reply_to: email as string,
    html:` <p>My name is ${name}</p>
    <p> ${message}</p>
    <p>You can get back to me on ${email}</p>
    
    `,
  })
}


