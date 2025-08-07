const express = require('express');
const passport = require('passport');

const router = express.Router();

/**
 * @swagger
 * /auth/github:
 *   get:
 *     summary: Login with GitHub
 *     description: >
 *       **Important:** This route must be opened directly in your browser to complete the GitHub OAuth login flow.  
 *       Do **not** use "Try it out" from Swagger UI — it will not work due to OAuth redirect requirements.
 *     tags:
 *       - Auth
 *     responses:
 *       302:
 *         description: Redirects to GitHub OAuth
 */

// GitHub login route
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));


/**
 * @swagger
 * /auth/github/callback:
 *   get:
 *     summary: GitHub OAuth callback
 *     description: Handles the GitHub OAuth callback and redirects to Swagger UI on success.
 *     tags:
 *       - Auth
 *     responses:
 *       302:
 *         description: Redirects to Swagger UI on success or home on failure
 */

// GitHub callback route
router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/api-docs');
}
);

/**
 * @swagger
 * /auth/logout:
 *   get:
 *     summary: Logout the current user
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: Successfully logged out
 *       500:
 *         description: Logout failed
 */

// Logout route
router.get('/logout', (req, res) => {
    req.logout(err => {
      if (err) {
        return res.status(500).json({ message: 'Logout failed' });
      }
      req.session.destroy(() => {
        res.clearCookie('connect.sid'); 
        res.json({ message: 'Logged out successfully' });
      });
    });
  });

module.exports = router;
