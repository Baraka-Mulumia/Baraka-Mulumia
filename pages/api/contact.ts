import { NextApiRequest, NextApiResponse } from 'next';

import { ServiceInquiry } from '@/assets/mail-templates/ServiceInquiry';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    // Process a POST request

    const { fullName, service, email, message } = req.body;
    const html = ServiceInquiry({
      fullName,
      service,
      email,
      message,
    });

    const APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
    const SENDER_EMAIL = process.env.GMAIL_SENDER_EMAIL;
    const RECEIVER_EMAIL = process.env.GMAIL_INQUIRY_RECEIVER_EMAIL;

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SENDER_EMAIL,
        pass: APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${fullName} <${SENDER_EMAIL}>`,
      to: RECEIVER_EMAIL,
      subject: `${service ? service : 'Dev-Connect'} Inquiry from ${fullName}`,
      html,
      replyTo: email,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true, data: info });
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    // Handle any other HTTP method
    return res.status(405).json({ success: false });
  }
}
