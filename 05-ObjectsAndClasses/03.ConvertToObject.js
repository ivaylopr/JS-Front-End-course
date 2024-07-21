function solve(input){
    let data = JSON.parse(input);

    Object
        .keys(data)
        .forEach(key=> {
            console.log(`${key}: ${data[key]}`);
        })
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')
