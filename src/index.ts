import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';

dotenv.config();
const app = express();
const port = process.env.PORT || 4500;

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.send({ status: 'UP' });
});

app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`PaySurity-Auth-Service listening on port ${port}`);
});
