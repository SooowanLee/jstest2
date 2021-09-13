'use strict'

// 전개 연산자(Spread)...

const fruits = ['Apple', 'Banana', 'Cherry', 'Orange'];
console.log(fruits);
console.log(...fruits);
// console.log('Apple','Banana', 'Cherry');

// 위의 fruits의 나머지 인수(Orange)들을 모두 받는다.
const toObject = (a, b, ...c) => ({ a, b, c })// c = rest parameter
console.log(toObject(...fruits));