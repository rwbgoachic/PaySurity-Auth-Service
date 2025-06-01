import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = Router();
const users = new Map<string, string>(); // In-memory store (for demo)

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (users.has(username)) {
    return res.status(409).send({ message: 'User already exists' });
  }
  const hashed = await bcrypt.hash(password, 10);
  users.set(username, hashed);
  res.status(201).send({ message: 'User registered' });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const hashed = users.get(username);
  if (!hashed) {
    return res.status(401).send({ message: 'Invalid credentials' });
  }
  const match = await bcrypt.compare(password, hashed);
  if (!match) {
    return res.status(401).send({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ username }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
  res.send({ token });
});

export default router;
