const mongoose = require('mongoose');
const PhotoSchema = mongoose.Schema({
  photo_title: {
    type: String,
    required: true
  },
  photo_url: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('photo', PhotoSchema);