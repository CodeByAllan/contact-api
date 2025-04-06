import { Router } from 'express';
import emailRoutes from './email.routes';

const router = Router();

router.use('/send-email', emailRoutes);

export default router;
