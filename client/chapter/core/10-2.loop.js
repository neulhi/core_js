/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;
// do {
//   console.log(i);

//   i++;
// } while (i < 5);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// let result = prompt('몇 번 반복할까요?', 0);

// do {
//   console.log(result);

//   result--;
// } while (result >= 0);

// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let result = prompt('몇 번 반복할까요?', 0);

// do {
//   console.log(
//     '최소 실행된 메세지입니다. 이 메세지는 조건이 거짓이서도 볼 수 있습니다.'
//   );

//   if (result < 0) {
//     break;
//   }
//   result--;
// } while (result >= 0);

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// let result = prompt('몇 번 반복할까요?', 0);

// let count = 0;

// do {

// 	console.log(count++);

// } while (result--);

// html에 태그를 만들고 내가 원하는 태그에 style을 입히기 위해서 (CSS)
// html에 태그를 만들고 내가 원하는 태그에 동적 제어를 주기 위해서 (DOM)
// Document Object Model

// let first = document.querySelector('.first');

// do {
//   first = first.nextSibling;
// } while (first.nodeType !== 1);

// console.log(first);

let first = document.querySelector('.first');

								// parameter / 매개변수 / 인자 
function next(node) {
	
	// validation(확인 작업) / 변수명부터 문제 및 해결방법 자세하게 정보 전달
	if (typeof node === 'string') {
		node = document.querySelector(node)
	}

  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1); // 1 = document.ELEMENT_NODE 같음

	return node;
}
 											// argument / 인수
const second = next('.first');
const _second = next(first);


								// parameter / 매개변수 / 인자 
function prev(node) {

	// validation(확인 작업) / 변수명부터 문제 및 해결방법 자세하게 정보 전달
	if (typeof node === 'string') {
		node = document.querySelector(node)
	}

  do {
    node = node.previousSibling;
  } while (node.nodeType !== document.ELEMENT_NODE); // 1 = document.ELEMENT_NODE 같음

	return node;
}
												// argument / 인수
const _first = prev('.second')

// console.log(first);
