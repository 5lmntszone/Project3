const Movie = require('../models/Movie')

// GET all movies
exports.getAll = async (req, res, next) => {
  try {
    const movies = await Movie.find()
    res.status(200).json(movies)
  } catch (err) {
    next(err)
  }
}

// POST new movie
exports.create = async (req, res, next) => {
  try {
    const newMovie = new Movie(req.body)
    await newMovie.save()
    res.status(201).json(newMovie)
  } catch (err) {
    next(err)
  }
}
