'use strict'

// .filter()

const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

const a = numbers.map(number => {
  return number > 3;
});

console.log(a);