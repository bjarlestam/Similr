exports.calculate = function(from, to, titles) {
  var sum_of_squares = 0;
  for(variable in titles[from]) {
    if(titles[to][variable]) {
      var distance = titles[from][variable] - titles[to][variable];
      sum_of_squares += Math.pow(distance, 2);
    }
  }

  return 1 / (1 + Math.sqrt(sum_of_squares)); 
};
