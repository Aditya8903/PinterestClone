const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  displayPicture: {
    type: String,
    default: 'default.jpg' // You can set a default image path or URL here
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post' // Assuming you have a separate Post model
  }]
});

module.exports = mongoose.model('User', userSchema);
