var db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.workout.find({}).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });

  app.put("/api/workouts/:id", function(req, res) {
    db.workout.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(dbWorkout => {
      res.json(dbWorkout);
    });
  });

app.post("/api/workouts", function(req, res) {
    db.workout.insertMany(req)
    .then(dbWorkout => {
        res.json(dbWorkout);
    });
});

app.get("/api/workouts/range", function(req, res) {
    db.workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    })
})

};