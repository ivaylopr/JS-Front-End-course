function solve(input){
    
    let employees=[];
    for (let i = 0; i < input.length; i++) {
        employees[i]={
            name:input[i],
            personalNumber:input[i].length
        }
    }

    employees.forEach(employee=>console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`));
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])
