const Mvp = require('../models/user');

exports.getAll = (email, callback) => {
  Mvp.find({email}, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs[0]);
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
  const { email, park, parkCode, img } = body;
  const update = { park, parkCode, img};
  Mvp.findOneAndUpdate({email}, {'$push': { 'toVisit': update } }, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};

exports.deleteToVisit = (body, callback) => {
  const { email, park, parkCode, img } = body;
  const update = { park, parkCode, img};
  Mvp.findOneAndUpdate({email}, {'$pull': { 'toVisit': update }}, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};
