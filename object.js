'use strict'

const userAge = {
  // key: value
  name: 'Soowan',
  age: 28
}
const userEmail = {
  name: 'Soowan',
  email: 'lsy9406@gmail.com'
}

// userAge, userEmail을 병합해서 새로운 객체 데이터 생성(원본 손상 X)
const target = Object.assign({}, userAge, userEmail);
console.log(target);
console.log(userAge);
console.log(target === userAge);

const a = { k: 123 };
const b = { k: 123 };
console.log(a === b);

const user = {
  name: 'Soowan',
  age: 28,
  email: 'lsy9406@gmail.com'
}

// 객체에서 key만 뽑아서 배열 데이터로 반환
const keys = Object.keys(user);
console.log(keys);
// ['name', 'age', 'email']

console.log(user['email']);

const values = keys.map(kye => user[kye]);
console.log(values);