const numbers = [5, 13, 7, 34, 2, 3, 53, 63];
const bigNumbers = numbers.filter(Number => Number > 20);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(smallNumbers);
const products = [
    { name: 'water bottle', price: 50, color: 'red' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'white' },
    { name: 'water glass', price: 3, color: 'white' }

];
const expensive = products.filter(product => product.price > 100);
const blacks = products.filter(product => product.color == 'red');
// console.log(blacks);

const whiteItem = products.find(product => product.color == 'red');
console.log(whiteItem);