import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js';

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
