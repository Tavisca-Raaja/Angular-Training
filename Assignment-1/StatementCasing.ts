let stringConstants = "get a random alpha numeric string.the random string generator creates a series of numbers.these can be helpful for creating security codes"

function ToStatementCasing(input : string)
{
    console.log(`Before applying statement casing :\n ${input}`);
    console.log();

    let stringArr = stringConstants.split('.');

    return stringArr.map((value) => {

        return value.charAt(0).toUpperCase() + value.substring(1);
    }).join('.');

}

console.log(`${ToStatementCasing(stringConstants)}`);

