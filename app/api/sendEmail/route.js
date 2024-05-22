import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { subject, message, email, name } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'baobabsolutions59@gmail.com',
                pass: process.env.NEXT_PUBLIC_PASSWORD
            }
        })

        const mailOption = {
            from: email,
            to: 'baobabsolutions59@gmail.com',
            subject: subject,
            html: `
        <p>${message}</p>
         
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}