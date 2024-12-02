/* Array Type */
let arr = [1, 2, 3];
let str = ['a', 'b', 'c'];
/* generic type 타입 변수 -> 함수 */
let _arr = [1, 2, 3];
let _str = ['a', 'b', 'c'];
// 유니온 타입 union type + array type
// 또는 으로 구분해서 순서, 빼는 것도 상관없다
let multi = ['hello', 10, false];
// multi = [10, 'h1', true]
// 자리를 정하면 안되나?
// 빼먹으면 안되는거 아닌가?
/* Tuple Type */
/*
    길이가 고정되어 있다. 배열처럼 길이가 동적으로 변경되지 않음.
    자리의 타입이 정해져 있다.
*/
let tupleA = [1, 2];
let person = ['tiger', 30];
// 다차원 배열
const user = [
    ['심선범', 30],
    ['심석범', 35],
    ['신선범', 13],
];
export {};
