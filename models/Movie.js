const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  director: { type: String, required: [true, 'Director is required'] },
  genre: { type: String, required: true },
  releaseYear: { type: Number, required: true, min: 1888 },
  rating: { type: Number, required: true, min: 0, max: 10 },
  duration: { type: Number, required: true },
  cast: { type: [String], required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Movie', movieSchema);
