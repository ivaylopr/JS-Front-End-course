

function solve(numbers){
    function isPalindrome(number){
        const forwardNumbers=number.toString();
        const backwardNumber=forwardNumbers.split('').reverse().join('');
        
        return forwardNumbers===backwardNumber;
    }
    numbers.forEach(number=>console.log(isPalindrome(number)));
    
}


solve([123,323,421,121]);
