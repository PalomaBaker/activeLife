const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  calorieCount: {
    type: Number,
    trim: true,
  },
  recipeImage: {
    type: Image,
    required: true,
  },
  recipeDescription: {
    type: String,
    required: true,
  },
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
