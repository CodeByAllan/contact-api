import { RequestHandler } from 'express';
import { sendEmailService } from '../services/email.service';

export const sendEmail: RequestHandler = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await sendEmailService({ name, email, message });
    res.status(200).json({
      code: 200,
      message: 'Email sent successfully!'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ code: 400, error: 'Error sending email.' });
  }
};
