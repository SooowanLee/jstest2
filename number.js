'use strict'

const pi = 3.14159265358979;
console.log(pi);

const str = pi.toFixed(2); // 문자데이터로 반환
console.log(str);
console.log(typeof str); // 타입 반환

const integer = parseInt(str); // 정수로 반환
const float = parseFloat(str); // 실수로 반환
console.log(integer);
console.log(float);
console.log(typeof integer, typeof float);


// Math
console.log('abs: ', Math.abs(-12)); // 절대값 반환

console.log('min: ', Math.min(2, 8)); // 최솟값

console.log('max: ', Math.max(2, 8)); // 최댓값

console.log('ceil: ', Math.ceil(3.14)); // 올림

console.log('floor: ', Math.floor(3.14)); // 내림 

console.log('round: ', Math.round(3.14)); // 반올림

console.log('random: ', Math.random()); // 랜덤 수 반환

