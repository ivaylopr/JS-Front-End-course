function vacation(group,category,day){
    if (category=='Students') {
        let result;
        switch(day){
            case 'Friday':
                
            result=group*8.45;
            if (group>=30) {
                result=result-(result*0.15);
            }
            console.log(`Total price: ${result.toFixed(2)}`);
            break; 
            case 'Saturday':
            result=group*9.80;
            if (group>=30) {
                result=result-(result*0.15);
            }
            console.log(`Total price: ${result.toFixed(2)}`);
            break;
            case 'Sunday':
            result=group*10.46;
            if (group>=30) {
                result=result-(result*0.15);
            }
            console.log(`Total price: ${result.toFixed(2)}`);
            break;
            }
    } else if (category=='Business') {
        let result;
        switch(day){
            case 'Friday':
            result=group*10.90;
            if (group>=100) {
                result=result-(10*10.90);
            }
            console.log(`Total price: ${result.toFixed(2)}`);
             break;
            case 'Saturday':
                result=group*15.60;
                if (group>=100) {
                    result=result-(10*15.60);
                }
            console.log(`Total price: ${result.toFixed(2)}`);
            break; 
            case 'Sunday':
            result=group*16;
            if (group>=100) {
                result=result-(10*16);
            }
            console.log(`Total price: ${result.toFixed(2)}`);
            break;
        }
    } else if (category=='Regular') {
        switch(day){
            case 'Friday':
            result=group*15;
            if (group>=10 && group<=20) {
                result=result-(result*0.05);
            }
            console.log(`Total price: ${result.toFixed(2)}`);
             break;
            case 'Saturday':
            result=group*20;
            if (group>=10 && group<=20) {
                result=result-(result*0.05);
            }
            console.log(`Total price: ${result.toFixed(2)}`);
            break; 
            case 'Sunday':
            result=group*22.50;
            if (group>=10 && group<=20) {
                result=result-(result*0.05);
            }
            console.log(`Total price: ${result.toFixed(2)}`);
            break;
        }
    }
}