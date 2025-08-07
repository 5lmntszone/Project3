const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const ensureAuth = require('../middleware/authMiddleware'); 

/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Get all movies
 *     responses:
 *       200:
 *         description: Returns an array of movies
 */
router.get('/', movieController.getMovies);

/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Create a new movie
 *     ...
 */
router.post('/', ensureAuth, movieController.createMovie); 

/**
 * @swagger
 * /api/movies/{id}:
 *   put:
 *     summary: Update a movie by ID
 *     ...
 */
router.put('/:id', ensureAuth, movieController.updateMovie); 

/**
 * @swagger
 * /api/movies/{id}:
 *   delete:
 *     summary: Delete a movie by ID
 *     ...
 */
router.delete('/:id', ensureAuth, movieController.deleteMovie); 

module.exports = router;
