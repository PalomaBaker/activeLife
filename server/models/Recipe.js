const { Schema } = require('mongoose');

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    trim: true,
  },
  image: {
    type: String,
    trim: true
  }
});

module.exports = recipeSchema;
