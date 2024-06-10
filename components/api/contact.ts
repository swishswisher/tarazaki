// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // email service provider details
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'brucengima@gmail.com',
        pass: 'Open@1545363',
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: `${name} <${email}>`,
        to: 'brucengima@gmail.com', 
        subject: subject,
        text: message,
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'An error occurred while sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
