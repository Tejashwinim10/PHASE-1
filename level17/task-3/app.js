// app.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

// 👇 Root route to fix "Cannot GET /"
app.get('/', (req, res) => {
  res.send('✅ Server is running and connected to MongoDB!');
});

// API routes
app.use('/api/users', userRoutes);

// MongoDB connection and server start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(process.env.PORT, () =>
      console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));
