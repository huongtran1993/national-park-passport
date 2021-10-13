const Mvp = require('../models/user');

exports.getVisited = (email, callback) => {
  Mvp.find({}, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};

exports.addVisited = (body, callback) => {
  const { email, visited } = body;
  Mvp.create({email, visited}, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};

exports.addToVisit = (body, callback) => {
  const { email, toVisit } = body;
  Mvp.create({email, toVisit}, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};

exports.deleteToVisit = () => {
  const { email, toVisitPark, toVisitState } = req.body;
  Mvp.delete({email, toVisitPark, toVisittate}, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};
