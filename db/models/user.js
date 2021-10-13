const mongoose = require('mongoose');

const mvpSchema = mongoose.Schema({
  email: String,
  visited: {
    visitedPark: String,
    visitedState: String
  },
  toVisit: {
    toVisitPark: String,
    toVisitState: String,
  }
});

const Mvp = mongoose.model('mvp', mvpSchema);

module.exports = Mvp;