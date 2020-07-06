var stringConstants = "get a random alpha numeric string";

function CharacterCheck(input: string,expectedCharacter: string){
    let result = [];

    input.split(' ').map((str) =>{

        for (let index = 0; index < str.length; index++)
         {
           if(str[index] == expectedCharacter)
           {
              result.push(str);
           }    
        }
    });
    return result;
}


console.log(CharacterCheck(stringConstants,'a'));