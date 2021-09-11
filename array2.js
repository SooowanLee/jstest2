'use strict'

// .filter()
// filter()함수로 조건에 맞는 데이터만 반환해서 새로운 데이터를 만든다.
const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

const a = numbers.map(number => number < 3);
console.log(a);


const b = numbers.filter(number => number < 3);
console.log(b);

console.log(numbers);

// .find() .findIndex()
// 데이터를 찾아서 데이터를 반환
const c = fruits.find(fruit => /^B/.test(fruit));
console.log(c);

const d = fruits.findIndex(fruit => /^B/.test(fruit));
console.log(d);

// .includes()
// 포함 여부를 반환
const e = numbers.includes(3);
console.log(e);

const f = fruits.includes('SOOWAN');
console.log(f);

// .push() .unshift()
// 원본 수정됨 주의!

numbers.push(5); // 배열데이터 가장 뒤에 데이터 삽입
console.log(numbers);

numbers.unshift(0); // 배열데이터 가장 앞에 데이터 삽입
console.log(numbers);

// .reverse()
// 원본 수정됨 주의!

numbers.reverse();
fruits.reverse();

console.log(numbers);
console.log(fruits);



// .splice(시작, 지울숫자, 삽입)
// 원본 수정됨 주의!
numbers.splice(3, 0, 3.1);

console.log(numbers);