const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err))

// Routes
const movieRoutes = require('./routes/movieRoutes')
app.use('/api/movies', movieRoutes)

const reviewRoutes = require('./routes/reviewRoutes')
app.use('/api/reviews', reviewRoutes)

// Error handler
app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500).json({ message: err.message })
})

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))
