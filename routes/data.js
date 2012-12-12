
require('js-yaml')
var euclidian_distance =require('../euclidian-distance.js')

var titles = require('../data.yml');

exports.raw = function(req, res){
  res.json(titles);
};

exports.similar = function(req, res) {
  var title = req.params.title;
  var max = parseInt(req.params.max) || 2;
  similar = findSimilar(title, max);
  res.json(similar);
};

exports.distance = function(req, res) {
  var from = req.params.from;
  var to = req.params.to;
  var distance = euclidian_distance.calculate(from, to, titles);
  res.json(distance);

};


function findSimilar(title, max) {
  var distances = [];
  for(other in titles) {
    if(other != title) {
      distances.push({title: other, distance: euclidian_distance.calculate(title, other, titles)});
    }
  }

  var sorted = distances.sort(function(a, b) {
        return b.distance - a.distance;
    });
  
  return sorted.slice(0, max);
}
