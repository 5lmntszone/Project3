const Review = require('../models/Review');

// GET: All reviews for a movie
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ movieId: req.params.movieId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// POST: Create a review
exports.createReview = async (req, res) => {
  try {
    const { movieId, user, rating } = req.body;

    if (!movieId || !user || rating === undefined) {
      return res.status(400).json({ message: 'movieId, user, and rating are required' });
    }

    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error: ' + error.message });
    }
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// PUT: Update a review
exports.updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.json(updatedReview);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error: ' + error.message });
    }
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// DELETE: Remove a review
exports.deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};
