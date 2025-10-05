const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

// MongoDB connection string (update or use .env)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/student_management';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/students', studentRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
