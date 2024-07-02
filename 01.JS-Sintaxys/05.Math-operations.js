function hackySolve(firstNumber , secondNumber, operator){
    let expression =`${firstNumber} ${operator} ${secondNumber}`
    let result=eval(expression);
    console.log(result);
}

console.log(hackySolve(1,2,'-'));
