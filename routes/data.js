
require('js-yaml');
var euclidian_distance = require('../euclidian-distance.js');
var pearson_correlation = require('../pearson-correlation.js');
var titles = require('../data.yml');

exports.raw = function(req, res){
  res.json(titles);
};

exports.similar = function(req, res) {
  var title = req.params.title;
  var max = parseInt(req.query.max) || 3;
  var algorithm = getAlgorithm(req.query.use);
  similar = findSimilar(title, max, algorithm);
  res.json(similar);
};

exports.distance = function(req, res) {
  var from = req.params.from;
  var to = req.params.to;
  var algorithm = getAlgorithm(req.query.use);
  var distance = algorithm.calculate(from, to, titles);
  res.json(distance);

};

function getAlgorithm(use) {
  if(use === 'pearson') {
    return pearson_correlation;
  } else {
    return euclidian_distance;
  }
}

function findSimilar(title, max, algorithm) {
  var distances = [];
  for(other in titles) {
    if(other != title) {
      distances.push({title: other, distance: algorithm.calculate(title, other, titles)});
    }
  }

  var sorted = distances.sort(function(a, b) {
        return b.distance - a.distance;
    });
  
  return sorted.slice(0, max);
}
