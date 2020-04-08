var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  
  day: {type: Date,
    default: Date.now},
    excercises: [
      {
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number
      }
    ]
});

var workout = mongoose.model("workout", workoutSchema);

module.exports = workout;