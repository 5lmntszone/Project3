const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - director
 *               - rating
 *             properties:
 *               title:
 *                 type: string
 *               director:
 *                 type: string
 *               genre:
 *                 type: string
 *               releaseYear:
 *                 type: number
 *               rating:
 *                 type: number
 *               duration:
 *                 type: number
 *               cast:
 *                 type: array
 *                 items:
 *                   type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Movie created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', movieController.createMovie);

/**
 * @swagger
 * /api/movies/{id}:
 *   put:
 *     summary: Update a movie by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The movie ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               director:
 *                 type: string
 *               genre:
 *                 type: string
 *               releaseYear:
 *                 type: number
 *               rating:
 *                 type: number
 *               duration:
 *                 type: number
 *               cast:
 *                 type: array
 *                 items:
 *                   type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Movie updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Movie not found
 */

router.put('/:id', movieController.updateMovie);

/**
 * @swagger
 * /api/movies/{id}:
 *   delete:
 *     summary: Delete a movie by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Movie deleted successfully
 *       404:
 *         description: Movie not found
 */
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
