function sumDigits(num){
    let sum=0;
    let currentNum = num;
    while(currentNum>0){
        sum+=currentNum%10;
        currentNum = parseInt(currentNum/10);
    }
    console.log(`${sum}`);
}

sumDigits(245678);