import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js';
import { xhrPromise } from './xhr.js';
import { insertLast } from '../dom/insert.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(360deg)';
//     delay(() => {
//       first.style.top = '0px';
//     	second.style.top = '0px';
//     });
//   });
// });

const shouldRejected = false;

const p = new Promise((성공, 실패) => {
  if (!shouldRejected) {
    성공('성공입니다');
  } else {
    실패('실패입니다');
  }
});

p.then((결과) => {
  // console.log(결과);
});

// promise 객체를 반환하는 함수 -> 재사용

const defaultOptions = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000,
};

function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  const { shouldRejected, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject(errorMessage);
      }
    }, timeout);
  });
}

// ? then은 새로운 Promise 객체를 반환 한다.(앞의 함수 값이 아닌 빈 껍데기) undefined가 안 나오게 하려면 의도적으로 .then을 호출한 함수를 다시 반환 해야한다.

delayP(2000);

// delayP(false)
//   .then((결과1) => {
//     first.style.top = '-100px';
//     console.log(결과1);
//     return delayP(false);
//   })
//   .then((결과2) => {
//     first.style.transform = 'rotate(360deg)';
//     console.log(결과2);
//     return delayP(false);
//   })
//   .then((결과3) => {
//     first.style.top = '0px';
//     console.log(결과3);
//     return delayP(false);
//   });

/* -------------------------------------------------------------------------- */
/*                                async와 await                                */
/* -------------------------------------------------------------------------- */

// async function d() {
//   return 1;
// }

// const _d = d();

// _d.then(console.log);

// console.log(_d);

// async 함수는 무.조.건 Promise Object를 반환
// await 2가지 기능 수행
// 			1. 코드의 실행 흐름제어
//      2. result 꺼내오기

async function delayA() {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve('성공');
    }, 2000);
  });

  const result = await p;

  return result;
}

// console.log(delayA());

function _라면끓이기() {
  delayP({ data: '물' })
    .then((res) => {
      console.log(res);

      return delayP({ data: '스프' });
    })
    .then((res) => {
      console.log(res);

      return delayP({ data: '면' });
    })
    .then((res) => {
      console.log(res);

      return delayP({ data: '계란' });
    })
    .then((res) => {
      console.log(res);

      return delayP({ data: '그릇' });
    })
    .then((res) => {
      console.log(res);
    });
}

async function 라면끓이기() {
  const a = await delayP({ data: '물' });
  console.log(a);

  const b = await delayP({ data: '스프' });
  console.log(b);

  // const c = await delayP({data:'면'})
  console.log('면');

  // const d = await delayP({data:'계란'})
  console.log('계란');

  const e = await delayP({ data: '그릇' });
  console.log(e);
}

// 라면끓이기();

// Promise
// function getData() {
//   xhrPromise.get('https://pokeapi.co/api/v2/pokemon/7').then((res) => {
//     console.log(res);

//     insertLast(
//       document.body,
//       `<img src="${res.sprites.other.showdown['front_default']}" alt="" />`
//     );
//   });
// }
// getData();

// async와 await
async function _getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/50');
  insertLast(
    document.body,
    `<img src="${data.sprites.other.showdown['front_default']}" alt="" />`
  );
}

_getData();
