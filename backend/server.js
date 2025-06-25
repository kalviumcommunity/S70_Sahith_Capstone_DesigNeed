const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const designs = require('./routes/designs'); // Route file for design-related APIs

dotenv.config();

const app = express();
const PORT = 8000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/designs', designs);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Database connected successfully');
})
.catch((err) => {
  console.log({ message: err.message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
