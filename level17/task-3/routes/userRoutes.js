// routes/userRoutes.js
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// POST /api/users - Create new user
router.post('/', async (req, res) => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const user = await User.create({ name, email, age });
    res.status(201).json(user);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    console.error('Server Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
