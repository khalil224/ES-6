const friends = ['tom hanks', 'Tom Cruise', 'Tom Bary', 'Tom Solaman'];
const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
    { name: 'water bottle', price: 50, color: 'red' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'white' },
    { name: 'water glass', price: 3, color: 'white' }

]
const productsName = products.map(product => product.name);
// console.log(productsName);
// products.map(product => console.log(product));
// products.forEach(product => console.log(product));
const players = [
    { name: { firstName: "Shakib", lastName: "Hasan" }, age: 34 },
    { name: { firstName: "Tamim", lastName: "Iqbal" }, age: 32 },
    { name: { firstName: "Mahmudullah", lastName: "Riyad" }, age: 36 },
    { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38 },
];
const player = players.map((player) => player.name.firstName);
console.log(player)