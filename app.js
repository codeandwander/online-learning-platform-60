// Express.js setup
const express = require('express');
const app = express();
const path = require('path');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routing
const courseRouter = require('./routes/courseRoutes');
const lessonRouter = require('./routes/lessonRoutes');
const progressRouter = require('./routes/progressRoutes');
const searchRouter = require('./routes/searchRoutes');
const dashboardRouter = require('./routes/dashboardRoutes');

app.use('/courses', courseRouter);
app.use('/lessons', lessonRouter);
app.use('/progress', progressRouter);
app.use('/search', searchRouter);
app.use('/dashboard', dashboardRouter);

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

FILENAME: package.json