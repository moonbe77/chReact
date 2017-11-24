var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];



console.log(inventory.find(function(fruit) { 
    return fruit.name === 'bananas';
}
    
)); 
// { name: 'cherries', quantity: 5 }