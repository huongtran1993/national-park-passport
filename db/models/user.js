const mongoose = require('mongoose');

const mvpSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  visited: [mongoose.Schema.Types.Mixed],
  toVisit: [mongoose.Schema.Types.Mixed]
});

const Mvp = mongoose.model('mvp', mvpSchema);

module.exports = Mvp;