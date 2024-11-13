/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray -> 배열 인지 체크하는거
const people = [
  {
    id: 0,
    name: 'MJ',
    age: 37,
    job: '음악하는 재미교포',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 1,
    name: 'SW',
    age: 13,
    job: '모집운동가',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/60.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 2,
    name: 'HJ',
    age: 43,
    job: '물음표살인마',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/30.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 3,
    name: 'MR',
    age: 36,
    job: '얼리버드',
    imgSrc: 'https://randomuser.me/api/portraits/med/women/30.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
];

/* 요소 순환 ---------------------------- */

// forEach

// people.forEach((user) => {
// 	console.log(user.job);
// });

function user(user) {
  // console.log(user.job);
}

people.forEach(user);

// delegation -> 위임

const span = document.querySelectorAll('span');
// console.log(span); // NodeList 유사배열

span.forEach((elem, index) => {
  elem.addEventListener('click', function () {
    this.style.color = 'orange';

    console.log(index);
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// reverse
// const reverse = people.reverse();// 값 자체가 바뀜
// console.log(reverse);
// const reverse = people.toReversed(); // 원형을 파괴 하지 않고 새로운 배열 반환
// console.log(people);

// splice
// const splice = people.splice(2, 1, { name: 'SB' });
// const splice = people.toSpliced(2, 1, { name: 'SB' }); // 원형을 파괴 하지 않고 새로운 배열 반환
// console.log(people);

// sort
const arr = [5, 4, 2, 7, 5, 1];

console.log(arr.sort(compare));

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
const sort = people.sort(compare);
console.log(sort);

console.clear();

/* ⭐ 새로운 배열 반환 ⭐ ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map
const map = people.map((user) => user.job);
// console.log(map);

// people의 나이에서 전부 + 2살 해서 새로운 배열에 담아주세요.
const agePlus = people.map((user) => {
  return user.age + 2;
});
// console.log(agePlus);

const cardTag = people.map((user) => {
  const template = /* html */ `
    <li class="userCard">
      <div>
        <img src="${user.imgSrc}" alt="${user.imgAlt}" />
      </div>
      <ul>
        <li> <span class="strong">이름</span> : ${user.name}</li>
        <li> <span class="strong">나이</span> : ${user.age}</li>
        <li> <span class="strong">직업</span> : ${user.job}</li>
      </ul>
    </li>
		`;

  return template;
});

const ul = document.querySelector('ul');

cardTag.forEach((tag) => ul.insertAdjacentHTML('beforeend', tag));

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find -> 아이템 자체 반환 -> 처음 찾은 하나만 반환
const az = people.find((user) => {
  return user.age > 20;
});
// console.log(az);

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter -> ⭐ 배열을 반환 ⭐
const mz = people.filter((user) => user.age > 20);
// console.log(mz);

/* 요소별 리듀서(reducer) 실행 -------------- */
// reduce
// reduceRight

// 모든 나이의 합을 더해주세요
// userCard 태그 만들기
const total = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);
// console.log(total);

const template = people.reduce((htmlCode, user) => {
  return htmlCode + `<li class"userCard">${user.name}, ${user.age}, ${user.job}</li>`;
}, '');
// console.log(template);
ul.insertAdjacentHTML('beforeend', template);
// console.log(ul);

/* string ←→ array 변환 ------------------ */

// split
// join

const _arr = 'KH JK SH YH';

const stringToArray = _arr.split(' ');
// console.log(stringToArray);

const arrayToArray = stringToArray.join(' ');
// console.log(arrayToArray);

// 어떻게 만들어 지는지 ⭐
// forEach
// filter
// reduce
// map

const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 치킨 너겟', price: 12000, brand: '하림' },
  { name: '냉동 감자튀김', price: 8000, brand: '맥케인' },
  { name: '냉동 새우', price: 18000, brand: '곰곰' },
];

// const _forEach = (f, i) => {
// 	for (const a of i) {
// 		f(a)
// 	}
// };

// _forEach((item) => {
// 	console.log(item);
// }, products);

const _map = (f, i) => {
  const arr = [];

  for (const a of i) {
    arr.push(f(a));
  }

  return arr;
};

const newMap = _map((item) => {
  return item.price;
}, products);
// console.log(newMap);

const _filter = (f, i) => {
  const arr = [];

  for (const a of i) {
    if (f(a)) {
      arr.push(a);
    }
  }

  return arr;
};

const product = _filter((item) => {
  return item.price < 15000;
}, products);

// console.log(product);

const _reduce = (f, acc, i) => {
  if (!i) {
    i = acc;
    acc = i.shift();
  }

  for (const a of i) {
    acc = f(acc, a);
  }

  return acc;
};

const t = _reduce((acc, cur) => {
  return acc + cur.price;
}, products);

// console.log(t);

const add = (a, b) => a + b;

console.log(
  _reduce(
    add,
    _map(
      (p) => p.price,
      _filter((p) => p.price < 20000, products)
    )
  )
);

// currying function

  // reduce,
  // add,
  // map,
  // filter,
  // log(products)
