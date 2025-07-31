const Review = require('../models/Review')

// GET all reviews for a movie
exports.getByMovieId = async (req, res, next) => {
  try {
    const reviews = await Review.find({ movieId: req.params.movieId })
    res.status(200).json(reviews)
  } catch (err) {
    next(err)
  }
}

// POST new review
exports.create = async (req, res, next) => {
  try {
    const review = new Review(req.body)
    await review.save()
    res.status(201).json(review)
  } catch (err) {
    next(err)
  }
}
