'use strict'

// .length
const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

console.log(numbers.length);
console.log(fruits.length);
console.log([1, 2].length);
console.log([].length);

// 두개의 배열을 병합해서 반환하는 메소드(원본 데이터는 손상 X)
console.log(numbers.concat(fruits));
console.log(numbers);
console.log(fruits);


// .forEach()
fruits.forEach(function (fruit, i) {
  console.log(fruit, i);
});

console.clear();


// foreach 와 map의 차이점 
// map은 콜백에서 반환된 새로운 데이터를 반환해준다 
// .map()
const a = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`);
});
console.log(a);

const b = fruits.map((fruit, index) => ({
    name: fruit,
    id: index
}));
console.log(b);

// find() = 배열에서 조건을 만족하는 첫번째 인덱스를 반환
const found = fruits.find(fruit => fruit === 'Banana'); 
console.log('found: ' + found);


