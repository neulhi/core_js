/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고 / AND) 연산자
let AandB = a && b;
console.log(AandB);

// Logical AND assignment
// a &&= b

// 논리합(또는 / OR) 연산자
let AorB = a || b;
console.log(AorB);

// Logical OR assignment
// a ||= b;
// a = a || b

// 부정 연산자
let reverseValue = value;
console.log(!reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};
// console.log(whichFalsy);
// 다 true라서 마지막 값이 나옴




// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};
// console.log(whichTruthy);
// 첫번째 true인 2(length가 2개라서)가 나옴

console.clear();


// 로그인 구현하기

// let userName = prompt('사용자 이름을 입력해주세요.','');

// if (userName == 'Admin') {
// 	let pass = prompt('비밀번호:','');
// 	if (pass == 'TheMaster') {
// 		alert('환영합니다!');
// 	} else if (pass == '' || pass == null) {
// 		alert('취소되었습니다.');
// 	} else {
// 		alert('인증에 실패하였습니다.');
// 	}
// } else if (userName == '' || userName == null) {
// 	alert('취소되었습니다.');
// } else {
// 	alert('인증되지 않은 사용자입니다.');
// }


// 쌤
function login(){
	let userName = prompt('누구십니까?');

	// if(userName === null || userName === undefined) return
	// if(!userName) return

							// 소문자는 비교도 소문자로
	if(userName.toLowerCase() === 'admin'){
		
		let password = prompt('비밀번호를 입력해주세요');

							// 대문자는 비교도 대문자로
		if(password.toUpperCase() === 'MASTER'){
			console.log( '로그인 성공' );
			
		}else if(password === null){
			console.log('취소됐습니다.');

		}else{
			console.log('잘못된 정보를 입력하셨습니다.');
			login()
		}
		
																	 // 정규 표현식(Regular Expression)
	}else if(userName === null || userName.replace(/\s*/g,'') === ''){
		console.log('취소됐습니다.');
	}else{
		console.log('제대로된 값을 입력해주세요');
	}
}

login()