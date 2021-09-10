'use strict'

// JS 데이터
// String: "", '', ``
// String.prototype.indexOf()

const str = 'Hello world!';

console.log(str.length);
console.log(str.indexOf('world'));
console.log(str.indexOf('SOOWAN') !== -1); // Hello world에 SOOWAN가 있으면 1 아니면 -1
console.log(str.slice(0, 3)); // slice(시작, 끝); 끝으로 지정한 index 전까지만 추출
console.log(str.slice(6, 11));
console.log(str.replace('world', 'SOOWAN')); //replace(기존단어, 교체단어);
console.log(str.match(/.+(?= )/)[0]);

const str1 = '     Hellow wolrd!      ';

console.log(str1.trim()); // 공백 제거

const hellow = 'Hello'.concat(' ', 'SooWan!!');
console.log(hellow);