var stringConstants = "get a random alpha numeric a string";
function WordCheck(input, expectedString) {
    var count = 0;
    input.split(' ').map(function (str) {
        if (str === expectedString) {
            count++;
        }
    });
    return count;
}
console.log(WordCheck(stringConstants, 'a'));
