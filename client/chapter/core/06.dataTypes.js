/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(empty);
console.log(typeof empty);


// 2. 값이 할당되지 않은 상태
let undef;
console.log(undef);
console.log(typeof undef);


// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = "double";
const single = 'single';
const backtick = `backtick ${double / 30}`;

console.log(backtick);
console.log(typeof double, typeof single, typeof backtick);


// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 123;
const floatingPointNumbe = 123.45;

console.log(integer);
console.log(typeof integer);
console.log(typeof floatingPointNumbe);


// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigInt = 123n;
console.log(bigInt);
console.log(typeof bigInt);


// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = true;
console.log(isActive);
console.log(typeof isActive);


// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = { 
	name: 'tiger',
	age: '42'
 }; // object literal
console.log(obj);

const object = new Object({ name: 'seonbeom' }); // constructor function
console.log(object);


// 8. 고유한 식별자(unique identifier)
const uuid = Symbol('uuid');
const uuid2 = Symbol('uuid');

console.log(uuid === uuid2);

console.clear();


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object

// 객체의 메서드를 정의하는 방법

// 1. normal function(생성자 함수) / class 문법으로 많이 사용 / sayHi
// 2. arrow function / sayHi2
// 3. concise method / sayHi3

// this 나를 호출한 대상
// method 안에서 this를 찾는 경우는 객체 자체를 선택해야 할 때
// arrow function은 this를 바인딩하지 않습니다.(상위 컨텍스트에서 this를 찾습니다.)

// 객체의 메서드를 정의할 때 => concise method 사용 권장
// 메서드 안에서 함수를 정의해야 할 때 => arrow function 권장
// 이유는 this를 찾기 위해서

const user = {
	name:'tiger',
	age:42,
	payment:false,
	sayHi:function(){
		console.log('this'); //user가 나옴 - normal function(생성자 함수) / class 문법으로 많이 사용
	},
	sayHi2:() => {
		console.log('this'); //window가 나옴 - arrow function 
	},
	sayHi3(){
		console.log('this'); //user가 나옴 - concise method
	},
	sayHi4(){
		function sayBye(){
			console.log(this);
		}
		sayBye(); //window가 나옴 - 앞에 누구에 의해 호출됐는지가 없기 떄문에
	},
	sayHi5(){
		const sayBye = () => {
			console.log(this);
		}
		sayBye(); //user가 나옴
	}
}

// Array



// function



// this


