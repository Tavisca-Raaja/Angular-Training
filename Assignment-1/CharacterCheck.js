var stringConstants = "get a random alpha numeric string";
function CharacterCheck(input, expectedCharacter) {
    var result = [];
    input.split(' ').map(function (str) {
        for (var index = 0; index < str.length; index++) {
            if (str[index] == expectedCharacter) {
                result.push(str);
            }
        }
    });
    return result;
}
console.log(CharacterCheck(stringConstants, 'a'));
