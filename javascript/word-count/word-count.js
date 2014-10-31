var word_breaks = /\s+/;

function words(str) {
  var words = str.split(word_breaks);
  var count = {};
  words.forEach( function(w) {
    if ( count[w] ) { count[w] += 1; }
      else { count[w] = 1; }
  });
  return ( count );
}

module.exports = words;