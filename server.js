const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();

const swaggerDocs = require('./routes/swagger-ui');
require('./auth/github'); // 

const app = express();
app.use(express.json());

// --- Sessions setup ---
app.use(session({
  secret: 'yourSecretKey', 
  resave: false,
  saveUninitialized: false,
}));

// --- Passport middleware ---
app.use(passport.initialize());
app.use(passport.session());

// --- MongoDB connection ---
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// --- Routes ---
const movieRoutes = require('./routes/movieRoutes');
app.use('/api/movies', movieRoutes);

const reviewRoutes = require('./routes/reviewRoutes');
app.use('/api/reviews', reviewRoutes);

// --- Auth Routes ---
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// --- Swagger ---
swaggerDocs(app);

// --- Error handler ---
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ message: err.message });
});

// --- Start server ---
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
