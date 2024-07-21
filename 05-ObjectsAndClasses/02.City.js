function city({name, area, population, country, postCode }){
    let cityInfo={name, area, population, country, postCode:postCode}
    let cityKeys=Object.keys(cityInfo);
    for (const prop of cityKeys) {
        console.log(`${prop} -> ${cityInfo[[prop]]}`);
    }
}


city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
