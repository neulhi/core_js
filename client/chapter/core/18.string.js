/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;
console.log(stringTotalLength); // 13

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log(extractCharacter); // i

// 문자열 중간 글자를 바꾸는 건 불가능⭐
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)⭐
let immutableChangeCharacter = 'P' + message.slice(1);
console.log(immutableChangeCharacter); // Pess is more.

// 부분 문자열 추출
// slice를 가장 많이 씀
let slice = message.slice(3, -1); // s is more
console.log(slice);

let subString = message.substring(2, 5);
console.log(subString); // ss

// let subStr = message.subStr(); // 잘 안씀

// 문자열 포함 여부 확인
let indexOf = message.indexOf('is');
console.log(indexOf); // 5 값이 -1(음수)가 나오면 원하는 값이 없다는 거

function checkBrowser(){
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edg') > -1: browserName = 'MS Edge'; break;
    case agent.indexOf('chrome') > -1 && !!window.chrome: browserName = 'Chrome'; break; // 명확하게 true false 로 검사하기 위해서 !! 사용
    case agent.indexOf('safari') > -1: browserName = 'Apple Safari'; break;
    case agent.indexOf('firefox') > -1: browserName = 'FireFox'; break;
    case agent.indexOf('trident') > -1: browserName = 'IE'; break;
    default: browserName = '무슨 브라우저에요..?'
  }

  return browserName
}
console.log(checkBrowser());


let lastIndexOf;

let includes = message.includes('Less'); // 가지고 있는지 확인
console.log(includes); // true

let startsWith = message.startsWith('less'); // 시작하는 문자열 확인
console.log(startsWith); // false

let endsWith = message.endsWith('more.'); // 끝나는 문자열 확인
console.log(endsWith); // true 



// 공백 잘라내기
let str = '              a                b        c        d'

// 왼쪽 오른쪽은 잘 안 쓰고 시작 끝 사용
/*let trimLeft = str.trimLeft();
console.log(trimLeft);
let trimRight;*/

let trim = str.trim(); // 많이 사용
console.log(trim);

let replaceAll = str.replaceAll(' ','')
console.log(replaceAll); // abcd

let replace = str.replace(/\s*/g,'')
console.log(replace); // abcd

// 텍스트 반복
let repeat = message.repeat();
console.log(repeat);

// 대소문자 변환
let toLowerCase = message.toLocaleLowerCase();
console.log(toLowerCase); // less is more.

let toUpperCase = message.toLocaleUpperCase();
console.log(toUpperCase); // LESS IS MORE.


// 텍스트 이름 변환 유틸리티 함수
// let toCamelCase = message.toCamelCase();
// let toPascalCase = message.toPascalCase();

function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

console.log(toCamelCase('less is more')); // lessIsMore
console.log(toPascalCase('less is more')); // LessIsMore