var stringConstants = "get a random alpha numeric a string";

function WordCheck(input: string,expectedString: string){
    let count =0;

    input.split(' ').map((str) =>{
      
        if(str === expectedString)
        {
            count++;
        }
    });
    return count;
}


console.log(WordCheck(stringConstants,'a'));