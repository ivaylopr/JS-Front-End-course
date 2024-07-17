function sumOfOddAndEven(number){
    let digit=0;
    let odd=0;
    let even=0;
    while (number>0) {
        digit=number%10;
        if (digit%2!=0) {
            odd+=digit;
        } else{
            even+=digit;
        }
        number=Math.trunc(number/10);
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

sumOfOddAndEven(1000435);
