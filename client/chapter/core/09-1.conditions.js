/* ---------------- */
/* Condition        */
/* ---------------- */

// let jsName = prompt("자바스크립트의 '공식' 이름은 무엇일까요?");
// let jsName = prompt('자바스크립트의 \'공식\' 이름은 무엇일까요?');
// let jsName = prompt(`자바스크립트의 '공식' 이름은 무엇일까요?`);

// if (jsName === 'ECMAScript') {
// 	alert('정답입니다!');
// } else {
// 	alert('오답입니다!');
// }

// console.log(jsName);
// let hn_num = +prompt ('숫자를 입력해보세요.',0)

/*if(typeof hn_num !=== 'number'){
	// ... 실행하지마!
}*/

// if (hn_num > 0) {
// 	console.log(1);
// }else if(hn_num < 0) {
// 	console.log(-1);
// }else if(hn_num == 0){
// 	console.log(0);
// }

// 삼항식 방법
// let a = 1;
// let b = 5;

// let result = a + b < 4 ? '미만' : '이상';

// let login;
// let message = (login == '직원') ? '안녕하세요' :
// 							(login == '임원') ? '환영합니다.':
// 							(login == '') ? '로그인이 필요합니다.':

// if 문 방법
// let message;

// if (login == '직원') {
//   message = '안녕하세요.';
// } else if (login == '임원') {
//   message = '환영합니다.';
// } else if (login == '') {
//   message = '로그인이 필요합니다.';
// } else {
//   message = '';
// }

// console.log(message);
// "안녕하세요"

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 하늘
/*// 영화 봤니?
let didWatchMovie = true;

// 영화 볼거니?
let goingToWatchMovie = true;


if ( didWatchMovie === true) {
	console.log('이미 봤구나!');
} else if (didWatchMovie === false) {
	if (goingToWatchMovie === true) {
		console.log('영화를 볼 예정이구나!');
	} else if (goingToWatchMovie === false) {
		console.log('영화를 안 거구나?!');
	}
}*/

function watchingMovie() {
  // 쌤
  // 영화 봤니?
  let didWatchMovie = confirm('베놈 영화 봤어?');

  if (didWatchMovie) {
    console.log('그 영화 진짜 재밋더라!!!');
  } else {
    // 영화 볼거니?
    let goingToWatchMovie = confirm('영화 보러 갈래?');

    if (goingToWatchMovie) {
      let withWho = prompt('누구랑 볼꺼니??');

      console.log(withWho);

      if (withWho === 'you') {
        console.log('그래 좋아 같이 보자~!');
      } else {
        console.log('왜 나랑 같이 안봐?');
      }
    } else {
      console.log('나도 너 별로야');
    }
  }
}

// 삼항식 방법
let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

const msg = didWatchMovie.includes('yes')
  ? '영화 재밌더라 한번 봐바'
  : goingToWatchMovie.includes('yes')
    ? '언제볼까? 재밌겠다!'
    : '그래...';

console.log(msg);

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

/*function render(node, isActive){

 
  // 조건부 랜더링 삼항식 방법
  let template = `
    <div>${ isActive ? '안녕' : '잘가' }</div>
  `

  node.insertAdjacentHTML('beforeend',template);
}*/
