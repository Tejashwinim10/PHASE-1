// routes/userRoutes.js
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    schema: Object.keys(User.schema.paths),
  });
});

export default router;
