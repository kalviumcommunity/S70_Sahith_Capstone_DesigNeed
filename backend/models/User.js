// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['designer', 'brand'],
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
