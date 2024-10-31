/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(String(YEAR)); // 명시적 변환 - 개발자가 의도적으로 변환
console.log(YEAR + ''); // 암시적 변환 - 자바스크립트가 자동으로 변환


// undefined, null
let days = null;
console.log(days + '');

let friends;
console.log(friends + '');


// boolean
let isClicked = true;

console.log(String(isClicked));

console.clear();

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null
let money = null;
console.log(money / 1);

// boolean
let isActive = false; // true 1, false 0, []도 0, {}는 NaN
console.log(isActive * 1);

// string
let num = '100';
console.log(Number(num));
console.log(+num); // 앞에 +붙이면 숫자로 변환
console.log(num / 1);
console.log(num * 1);

// numeric string
const width = '120.5px';
console.log(width * 1); // NaN
console.log(parseInt(width)); // 정수
console.log(parseFloat(width)); // 소숫점

console.clear();

/* 데이터 → 불리언 ---------------------------------------------------------- */
console.log(Boolean(friend)); // false
console.log(Boolean(null)); // false
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(' ')); // true 공백 문자
console.log(Boolean('0')); // true
console.log(!!'0'); // true
console.log(!!{}); // true
console.log(!![false]); // true
console.log( Boolean(()=>{}) ); // true

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 