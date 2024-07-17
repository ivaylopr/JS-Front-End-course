function signCheck(numOne, numTwo, numThree){
    let multiply =(a,b)=>a*b;
    let product = multiply(numOne,multiply(numTwo,numThree));
    const result=product>=0 ? "Positive" : "Negative";
    console.log(result);
}


signCheck(-6,-12,14)
