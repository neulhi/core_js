/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ ` 
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let dialog = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser;

authUser = {
  uuid: crypto.randomUUID(),
  name: 'neul',
  email: 'neul@email.com',
  isSignIn: false,
  permissions: 'paid', // paid | free
};
// getter
console.log(authUser.uuid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser.permissions);

// setter
console.log((authUser.permissions = 'free'));

// authentication
// authorization

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// getter
console.log(authUser['uuid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']);
console.log(authUser['permissions']);

// setter
console.log((authUser['permissions'] = 'paid'));

// 객체의 key만을 모아서 배열로 반환하는 객체의 static method는?
const keys = Object.keys(authUser);
console.log(authUser);

console.clear();
/* -------------------------------------------------------------------------- */

// keys
// function getProperties(obj){

//   let arr = [];

//   for(const key in obj){
//     if(Object.hasOwn(obj,key)){
//       arr.push(key)
//     }
//   }
//   return arr;
// }

const value = Object.values(authUser);

function getProperties(obj) {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push([key, obj[key]]);
    }
  }
  return arr;
}

getProperties(authUser);

console.log(getProperties(authUser));

console.clear();

/* -------------------------------------------------------------------------- */
// 프로퍼티 제거 or 삭제
// 제거(remove) or 삭제(delete)
//   비워두기				메모리 날림

// 객체가 맞는지
function removeProperty(obj, key) {
  if (isObject(obj)) {
    obj[key] = null;
  }
}

removeProperty(authUser, 'uuid');
authUser.uuid = null;

// console.log(removeProperty(authUser, 'uuid'));

function deleteProperty(obj, key) {
  if (isObject(obj)) {
    delete obj[key];
  }
}

deleteProperty(authUser, 'name');

// console.log(deleteProperty(authUser, 'name'));

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'tel'; // phone | tel

function createUser(name, age, phone) {
  return {
    name: name,
    age: age,
    [calculateProperty]: phone,
  };
}

// 단축 프로퍼티(shorthand properties)
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};

console.log(student);

console.clear();

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
// 순서(order)를 바꿀 수 없음. 변수명은 바꿀 수 있음
const arr = [10, 100, 1000, 10_000];

// 기본값 설정
const [a1, a2, a3, a4, a5 = 100_000] = arr;

console.log(a5);

// rest
/*const [a1, ...rest] = arr;

console.log(rest);*/

// const a1 = arr[0];
// const a2 = arr[1];
// const a3 = arr[2];

const [first,second] = document.querySelectorAll('span');
console.log(first);
console.log(second);

console.clear();


/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
	김김김: 800,
	박박박: 130,
	이이이: undefined,
	명명명: 80
}

// 객체의 구조 분해 할당 : 순서가 상관없다. 객체의 key와 변수의 이름이 동일해야 한다.
// 하지만 변수명 별칭 설정가능 (박박박:박) 별칭 설정하면 별칭으로만 불러서 써야 함.
// 배열처럼 기본값 설정도 가능 (값을 undefined로 해 놔야 됨) => 이이이:이 = 200,
const {
	박박박:박,
	이이이:이 = 200,
	명명명,
	김김김,
	최최최 = 300
} = salaries;

console.log(김김김);
console.log(박);
console.log(최최최);
console.log(이);

// const { 박박박, 이이이, 명명명, 김김김 } = salaries;

console.clear();

function createUserObject(name,age,address,phone){
  
  return { name, age, address, phone }
}


const user = createUserObject('범범범','35','중랑구','010-1234-5678')

console.log(user);

