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
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
