var anagram = function(word) {
  return( new Anagram(word) );
}

var Anagram = function(word) {
  this.word = word;
  this.letters_count = this.set_letters(word);
};

Anagram.prototype.set_letters = function(word) {
  var count = {},
      letters = word.toLowerCase().split('');

  letters.forEach( function(l) {
    count[l] ? count[l]++ : count[l] = 1;
  });
  return count;
}

Anagram.prototype.matches = function() {
  var matches_array = [],
      test_matches = [],
      word = this.word.toLowerCase(),
      letters_count = this.letters_count,
      length = Object.keys(letters_count).length;

  // console.log("args: " + arguments + " t_m: " + test_matches);
  // console.log(typeof test_matches === 'string');

  if ( arguments.length > 1 ) {
    test_matches = [];
    for ( var i in arguments) {
      test_matches.push( arguments[i] );
    }
  } else {
    test_matches = arguments[0];
  };

  test_matches.forEach( function(m) {
    var test_count = new Anagram(m).letters_count,
        equal_length = length === Object.keys(test_count).length,
        unique = word !== m.toLowerCase(),
        test = [];

    if ( equal_length && unique ) {
      for (var l in letters_count) {
        letters_count[l] === test_count[l] ? test.push( true ) : test.push( false );
      };
    } else {
      test.push( false );
    }
    // console.log(m + ': ' + test + " " + test.indexOf(false) );
    // console.log(test.indexOf(false) < 0 );
    if ( test.indexOf(false) < 0 ) { matches_array.push(m) };
  });

  return( matches_array );
};

// var subject = new Anagram("ant");
// var matches = subject.matches('tan', 'stand', 'at');

// console.log(matches);

module.exports = anagram;