const mongoose = require("mongoose");

// CREATING DATABASE
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
  },
  duration: {
    type: Number,
    required: [true, "A tour must have a duration"],
  },
  difficulty: {
    type: String,
    required: [true, "A tour must have a difficulty"],
    enum: {
      values: ["easy", "medium", "hard"],
      message: "Difficulty is either: easy, medium, difficult",
    },
  },
  price: {
    type: Number,
    required: [true, "A tour must have price"],
  },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
