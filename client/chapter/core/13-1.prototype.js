/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// enumerable : 열거 가능한 / for문으로 조회 가능한

// object literal / a = {}

const animal = {
  leg: 4,
  tail: true,
  // getter
  get eat() {
    return this.stomach;
  },
  // setter
  set eat(food) {
    (this.stomach = []), this.stomach.push(food);
  },
};
/*console.log(animal.leg);
console.log(animal.tail);
console.log(animal.eat = '바나나'); // setter
console.log(animal.eat); // getter*/

const tiger = {
  pattern: '호랑이 무늬',
  hunt(target) {
    this.prey = target;
    this.eat = this.prey;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};
// console.log(tiger.hunt('여우'));
// console.log(tiger.leg);
// console.log(tiger.tail);
// console.log(tiger);

const 백두산호랑이 = {
  name: '백돌이',
  color: 'white',
  __proto__: tiger,
};
// console.log(백두산호랑이);
// console.log(백두산호랑이.hunt('늑대'));
// console.log(백두산호랑이.eat);

const 한라산호랑이 = {
  name: '한돌이',
  color: 'orange',
  __proto__: tiger,
};

// console.log(한라산호랑이);
// console.log(한라산호랑이.eat);

// object constructor function
// 생성자 함수

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.getEat = function () {
    return this.stomach ?? [];
  };
  this.setEat = function (food) {
    this.stomach = [];
    this.stomach.push(food);
  };
}

// const a = new Animal();

// console.log(a);
// console.log(a.setEat('사과'));
// console.log(a.getEat());


// const a = new Animal(); // 회손된 예시

function Tiger(name) {
	Animal.call(this)
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  };
}

// Tiger.prototype = a; // 회손된 예시

const 금강산호랑이 = new Tiger('금순이');

console.log(금강산호랑이);
console.log(금강산호랑이.legs);

// 함수의 능력
// call -> 함수를 대신 실행시켜줌(함수 안의 this를 바꿔야하는 상황에 사용) -> 빌려쓰기
// apply -> (매개변수)인자를 배열 형태로 전달
// bind -> 함수를 실행 하지않음 가지고만 있다, 호출 시 새로운 함수로 반환


// function sum(a,b){
//   console.log(this, a + b);
// }

// Object.prototype.hasOwnProperty.call(obj,key)

// sum.call('안녕!',10,20)