function solve(input){
    let towns=[];
    let i =0;
    for (const town of input) {
        let newTown=town.split(' | ');
        let townToAdd={
            name:newTown[0],
            latitude:Number(newTown[1]).toFixed(2),
            longitude:Number(newTown[2]).toFixed(2)}
            
            towns[i]=townToAdd;
            i++;
        }

        towns.forEach(town=>console.log(`{ town: '${town.name}', latitude: '${town.latitude}', longitude: '${town.longitude}' }`));
    }


    solve(['Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625']
        );
    