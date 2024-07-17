function smallestNumber(numOne,numTwo,numThree){
    
    let result=Number.MAX_SAFE_INTEGER;
    const numbers=[numOne,numTwo,numThree];
    for (const num of numbers) {
        if (num<result) {
            result=num
        }
    }
    console.log(result);
}


smallestNumber(2,5,3)
