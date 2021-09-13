import _ from 'lodash';
'use strict'
// 참조데이터 안에 또 다른 참조데이터 여부에 따라 복사 종류를 선택


// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
const user = {
  name: 'Soowan',
  age: 28,
  emails: ['lsy9406@gmail.com']
}
// 참조형데이터는 복사해서 사용하기
// const copyUser = Object.assign({}, user); // Object.assign() 이용하기
const copyUser = _.cloneDeep(user); // 깊은 복제
// const copyUser = {...user}; // 전개연산자이용하기
console.log(copyUser === user);

user.age = 22;
console.log('user', user);
console.log('copyUser', copyUser);

console.log('------');
console.log('------');

user.emails.push('dkdjfhsjk2@gmail.com');
console.log(user.emails === copyUser.emails);
console.log('user', user);
console.log('copyUser', copyUser);