function solve(numbers){
    let evenSum=0;
    let oddSum=0;
    for (const num of numbers) {
        if (num%2===0) {
            evenSum+=num;
        } else{
            oddSum+=num;
        }
    }
    const result=evenSum-oddSum;
    console.log(result);
}

solve([1,2,3,4,5,6]);