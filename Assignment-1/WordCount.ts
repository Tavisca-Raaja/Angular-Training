let stringConstants = "get a random alpha numeric string.get a random alpha numeric string.";

function CountNofWords(input : string)
{
    var words =stringConstants.trim().split(/[\s.]/);

    return words.length;
}

console.log(CountNofWords(stringConstants));