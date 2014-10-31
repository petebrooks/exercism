//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if ( isShouting(input) ) { return ('Whoa, chill out!'); }
  if ( isQuestion(input) ) { return ('Sure.'); }
  if ( isSilent(input) ) { return ('Fine. Be that way!'); }
  return ('Whatever.');
};

function isShouting(str) {
  return (str === str.toUpperCase() && /[A-z]/.test(str));
}
function isQuestion(str) {
  return (str.slice(-1) === '?');
}
function isSilent(str) {
  return (/^\s*$/.test(str));
}

module.exports = Bob;
