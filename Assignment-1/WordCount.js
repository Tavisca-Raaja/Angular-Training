var stringConstants = "get a random alpha numeric string.get a random alpha numeric string.";
function CountNofWords(input) {
    var words = stringConstants.trim().split(/[\s.]/);
    var words1 = stringConstants.trim().split(/[a-z][A-Z][\s.]/);
    console.log(words1);
    return words.length;
}
console.log(CountNofWords(stringConstants));
