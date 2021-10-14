const Mvp = require('../models/user');

exports.createAccount = (email, callback) => {
  Mvp.create({email, visited: [], toVisit: []}, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};

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
  const { email, park, parkCode, state} = body;
  const update = { park, parkCode, state};
  Mvp.findOneAndUpdate({email}, {'$push': { 'visited': update } }, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};

exports.addToVisit = (body, callback) => {
  const { email, park, parkCode, state, img } = body;
  const update = { park, parkCode, state, img};
  Mvp.findOneAndUpdate({email}, {'$push': { 'toVisit': update } }, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};

exports.deleteToVisit = (body, callback) => {
  const { email, park, parkCode, state, img } = body;
  const update = { park, parkCode, state, img};
  Mvp.findOneAndUpdate({email}, {'$pull': { 'toVisit': update }}, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};
