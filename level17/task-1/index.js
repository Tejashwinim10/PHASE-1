import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 3000

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('✅ Connected to MongoDB')
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message)
    process.exit(1)
  }
}

app.get('/', (req, res) => {
  if (mongoose.connection.readyState === 1) {
    res.send('Connected to MongoDB')
  } else {
    res.status(500).send('MongoDB not connected')
  }
})

app.listen(PORT, async () => {
  await connectDB()
  console.log(`🚀 Server running at http://localhost:${PORT}`)
})
