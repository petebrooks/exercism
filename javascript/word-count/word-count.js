function words(str) {
  var words = str.split(/\s+/),
      count = {};
  words.forEach( function(w) {
    if ( count[w] ) { count[w] += 1; }
      else { count[w] = 1; }
  });
  return count;
}

module.exports = words;