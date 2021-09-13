'use strict'

const { add } = require('lodash');

// 구조 분해 할당 (Destructuring assignmnet)
// 비구조화 할당

const user = {
  name: 'Soowan',
  age: 28,
  email: 'lsy9406@gmail.com'
}

// 객체로 생성을 안했다면 선언부에서 기본값을 지정 가능
// 위에서 name이라고 선언을 했지만 실제 사용할떄 다른 이름으로 변경해서 사용 가능
const { name: soowan, age, address = 'Korea' } = user;
// E.g, user.address

console.log(`사용자의 이름은 ${soowan}입니다.`);
console.log(`${soowan}의 나이는 ${age}세입니다.`);
console.log(`${soowan}의 이메일 주소는 ${user.email}입니다.`);
console.log(address);

const fruits = ['Apple', 'Banana', 'Cherry'];
const [a, b, c, d = 'Lemon'] = fruits;
console.log(a, b, c, d);

// 배열 중 하나만 추출해서 사용하는 방법
const [, , e] = fruits;
console.log(e);