import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';
const app = express();
app.use(
  cors({
    origin: function (origin, callback) {
      if (origin === process.env.ALLOWED_ORIGIN) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  })
);
app.use(morgan('dev'));
app.use(express.json());
app.use('/', routes);

export default app;
