// Array conatining numbers 1 through 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array of odd numbers
const oddNumbers = numbers.filter(function (number) {
  return number % 2 !== 0;
});
console.log(`Array of odd numbers:, ${oddNumbers}`);

// Array of numbers divisible by 2 or 5
const divisibleBy2or5 = numbers.filter(function (number) {
  return number % 2 === 0 || number % 5 === 0;
});
console.log(`Array of numbers divisible by 2 or 5:, ${divisibleBy2or5}`);

// Array of numbers divisible by 3, squared
const squaredDivisibleBy3 = numbers.filter(function (number) {
  return number % 3 === 0;
}).map(function (number) {
  return number ** 2;
});
console.log(`Array of numbers divisible by 3, squared:", ${squaredDivisibleBy3}`);

// Sum of the following: square the numbers divisible by 5
const sumSquaredDivisibleBy5 = numbers.filter(function (number) {
  return number % 5 === 0;
}).map(function (number) {
  return number ** 2;
}).reduce(function (acc, curr) {
  return acc + curr;
}, 0);
console.log(`Sum of the squares of numbers divisible by 5:", ${sumSquaredDivisibleBy5}`);