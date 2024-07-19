function matrix(number){
    const printRow=(num)=>new Array(num).fill(num).join(' ');
    for (let i = 0; i < number; i++) {
        console.log(printRow(number));
    }
}

matrix(3);
