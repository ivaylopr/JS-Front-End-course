function solve(num1,num2){
    function factorialResult(number){
        if (number===0 || number===1) {
            return 1;
        } else{
            let result=1;
            for (let i = 1; i <=number; i++) {
                result*=i;
            }
            return result;
        }
    }
    const firstResult=factorialResult(num1);
    const secondResult = factorialResult(num2);
    const totalResult = firstResult/secondResult;
    console.log(`${totalResult.toFixed(2)}`);
}

solve(6,2);
