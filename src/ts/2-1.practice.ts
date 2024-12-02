// 숫자만 담을 수 있는 배열
let numbers: number[] = [1, 2, 3];

// 문자만 담을 수 있는 배열
let string: string[] = ['a', 'b', 'c'];

// 다양한 타입을 포함할 수 있는 배열(튜플 아님)
let mixed: (string | number | boolean)[] = ['문자', 1, false, 2, 'a'];

// 숫자만 담들 수 있는 배열 (튜플로 정의)
let matrix: [number, number, number][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
