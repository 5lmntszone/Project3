const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: String,
  genre: String,
  releaseYear: Number,
  rating: Number,
  duration: Number,
  cast: [String],
  description: String
})

module.exports = mongoose.model('Movie', movieSchema)
