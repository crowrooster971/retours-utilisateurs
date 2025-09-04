const express = require('express');
const feedbackRoutes = require('./routes/feedback');
const app = express();

// Middleware
app.use(express.json());
app.use('/api/feedback', feedbackRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));