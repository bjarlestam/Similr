exports.calculate = function(from, to, titles) {
  
  var sum_from = 0;
  var sum_to = 0;
  var sumsq_from = 0;
  var sumsq_to = 0;
  var sum_products = 0;
  var n = 0;

  for(variable in titles[from]) {
    if(titles[to][variable]) {
      n += 1;
      sum_from += titles[from][variable];
      sumsq_from += Math.pow(titles[from][variable], 2);

      sum_to += titles[to][variable];
      sumsq_to += Math.pow(titles[to][variable], 2);

      sum_products += (titles[from][variable] * titles[to][variable]);

    }
  }
  
  if(n===0) {
    return 0;
  }

  var num = sum_products - (sum_from * sum_to / n);
  var den = Math.sqrt((sumsq_from - Math.pow(sum_from, 2) / n) * (sumsq_to - Math.pow(sum_to, 2) / n));
  if(den === 0) {
    return 0;
  }

  return num / den;

};
