function solve(stock,order){
    let store={};
    for (let i = 0; i < stock.length; i+=2) {
        const product=stock[i];
        const quantity = Number(stock[i+1]);
        store[product]=quantity;
    }

    for (let i = 0; i < order.length; i+=2) {
        const product=order[i];
        const quantity = Number(order[i+1]);
        if (!store[[product]]) {
            store[product]=quantity;
        } else{
            store[product]+=quantity;
        }
    }

    for (const product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])
