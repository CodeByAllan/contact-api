import axios from 'axios';
import { EmailPayload } from '../types/email.types';
import dotenv from 'dotenv';

dotenv.config();

export const sendEmailService = async ({
  name,
  email,
  message
}: EmailPayload) => {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  const templateParams = {
    name: name,
    email: email,
    message
  };

  const URL_BASE = 'https://api.emailjs.com/api/v1.0/email/send';

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    accessToken: privateKey,
    template_params: templateParams
  };

  await axios.post(URL_BASE, payload);
};
