function sumAndSubtract(numOne, numTwo, numThree){
    let sum=(a,b)=> a+b;
    let subtract =(a,b)=>a-b;
    let result=subtract((sum(numOne,numTwo)),numThree);
    console.log(result);
}

sumAndSubtract(23,6,10);
