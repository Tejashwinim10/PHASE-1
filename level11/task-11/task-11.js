let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squares = numbers.map(n => n ** 2);
let oddNumbers = numbers.filter(n => n % 2 !== 0);
let sum = numbers.reduce((acc, n) => acc + n, 0);

numbers.forEach(n => {
  console.log(`Number: ${n}, Square root: ${Math.sqrt(n).toFixed(2)}`);
});

console.log("Squares:", squares);
console.log("Odd Numbers:", oddNumbers);
console.log("Sum:", sum);
