const numbers = [4, 6, 8, 10]
const output = [];
const doubleIt = number => number * 2;
for (const number of numbers) {
    const result = number * 2;
    output.push(result);
}
console.log(output);
const output2 = numbers.map(doubleIt);
console.log(output2);