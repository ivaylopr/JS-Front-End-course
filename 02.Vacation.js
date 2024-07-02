function vacation(group,category,day){
    if (category=='Students') {
        let result;
        switch(day){
            case 'Friday':
            result=group*8.45;
            console.log(`Total price: ${result.toFixed(2)}`);
            break; 
            case 'Saturday':
            console.log(`Total price: 9.80`);
            result=group*9.80;
            console.log(`Total price: ${result.toFixed(2)}`);
            break;
            case 'Sunday':
            result=group*10.46;
            console.log(`Total price: ${result.toFixed(2)}`);
            break;
            }
    } else if (category=='Business') {
        let result;
        switch(day){
            case 'Friday':
            result=group*10.90;
            console.log(`Total price: ${result.toFixed(2)}`);
             break;
            case 'Saturday':
                result=group*15.60;
            console.log(`Total price: ${result.toFixed(2)}`);
            break; 
            case 'Sunday':
            result=group*16;
            console.log(`Total price: ${result.toFixed(2)}`);
            break;
        }
    } else if (category=='Regular') {
        switch(day){
            case 'Friday':
            console.log(`Total price: 15`);
            result=group*15;
            console.log(`Total price: ${result.toFixed(2)}`);
             break;
            case 'Saturday':
            console.log(`Total price: 20`);
            result=group*20;
            console.log(`Total price: ${result.toFixed(2)}`);
            break; 
            case 'Sunday':
            result=group*22.50;
            console.log(`Total price: ${result.toFixed(2)}`);
            break;
        }
    }
}