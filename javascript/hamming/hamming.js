var compute = function(stringA, stringB) {
  var length,
      hamming = 0;

  if ( stringA.length >= stringB.length ) {
    length = stringA.length;
  } else {
    length = stringB.length;
  };

  for (var i = 0; i < length; i++) {
    if ( stringA[i] !== stringB[i] ) { hamming++ };
  };

  return hamming;
}

// console.log(compute('A', 'A'));

module.exports = compute;