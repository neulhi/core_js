// 문제 : unknownValue 변수에 unknown 타입을 명시 후 아래와 같은 메서드가 실행될 수 있도록 만들어주세요

let unknownValue: unknown;

if (typeof unknownValue === 'number') {
  console.log(unknownValue.toFixed(2));
	unknownValue.toFixed(2)

} else if (typeof unknownValue === 'string') {
  console.log(unknownValue.toUpperCase());
	unknownValue.toUpperCase

} else if (unknownValue instanceof Date) {
  console.log(unknownValue.getTime());
	unknownValue.getTime()

} else if (unknownValue instanceof HTMLElement) {
  console.log(unknownValue.nextElementSibling);
	unknownValue.nextElementSibling
	
} else {
  console.log('unknownValue is of an unsupported type.');
}

// unknownValue.toFixed(2)
// unknownValue.toUpperCase
// unknownValue.getTime()
// unknownValue.nextElementSibling
