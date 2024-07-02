function(age){
    if(age<0){
        console.log(`out of bounds`);
    } else{
        if (age>=0 && age<=2) {
            console.log(`baby`);
        } else if (age>=3 && age<=13) {
            console.log(`child`);
        } else if (age>=14 && age<20) {
            console.log(`teenager`);
        } else if (age>19 && age<66) {
            console.log(`adult`);
        } else{
            console.log(`elder`);
        }
    }
}