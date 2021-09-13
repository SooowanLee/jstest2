'use strict'

// 전개 연산자(Spread)...

const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits);
console.log(...fruits);
// console.log('Apple','Banana', 'Cherry');

function toObject(a, b, c) {
  return {
    a: a,
    b: b,
    c: c
  }
}
console.log(toObject(...fruits));