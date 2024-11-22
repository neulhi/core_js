const END_POINT = 'https://jsonplaceholder.typicode.com/users';

{
  // [readyState]
  /* 
		0 : uninitialized
		1 : loading
		2 : loaded
		3 : interactive
		4 : complete -> 성공 또는 실패
	*/
}

/* -------------------------------------------------------------------------- */
/*                                  callback                                  */
/* -------------------------------------------------------------------------- */

// 나
{
  // function xhrUsers() {
  //   const dataUsers = xhr;
  //   dataUsers.addEventListener('readystatechange', () => {
  //     if (dataUsers.readyState === 4) {
  //       if (dataUsers.status >= 200 && dataUsers.status < 400) {
  //         console.log(JSON.parse(dataUsers.response));
  //       } else {
  //         console.error('실패ㅜㅜ');
  //       }
  //     }
  //   });
  // }
  // xhrUsers();
}

function xhr({
  method = 'GET',
  url = '',
  success_콜백 = null,
  fail_콜백 = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  // 객체의 key, value를 분리(Object.entries)
  // 반복문(forEach)

  if (!(method === 'DELETE')) {
    Object.entries(headers).forEach(([k, v]) => {
      xhr.setRequestHeader(k, v);
    });
  }

  // xhr.setRequestHeader(key, value);

  xhr.addEventListener('readystatechange', () => {
    const { status, response, readyState } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        const data_콜백 = JSON.parse(response);
        success_콜백(data_콜백);
      } else {
        fail_콜백({ message: '알 수 없는 오류가 발생했습니다.' });
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

const obj = {
  name: '감자',
  age: 13,
};

// xhr({
//   method: 'DELETE',
//   url: END_POINT,
//   success_콜백: (data_콜백) => {
//     console.log(data_콜백);
//   },
//   fail_콜백: () => {},
// });

xhr.get = (url, success_콜백, fail_콜백) => {
  xhr({ url, success_콜백, fail_콜백 });
};

xhr.post = (url, body, success_콜백, fail_콜백) => {
  xhr({
    method: 'POST',
    url,
    body,
    success_콜백,
    fail_콜백,
  });
};

xhr.put = (url, body, success_콜백, fail_콜백) => {
  xhr({
    method: 'PUT',
    url,
    body,
    success_콜백,
    fail_콜백,
  });
};

xhr.delete = (url, success_콜백, fail_콜백) => {
  xhr({
    method: 'DELETE',
    url,
    success_콜백,
    fail_콜백,
  });
};

// xhr.delete(
// 	END_POINT,
// 	(data_콜백) => {
// 		console.log(data_콜백);
// 	}
// )

/* -------------------------------------------------------------------------- */
/*                                   promise                                  */
/* -------------------------------------------------------------------------- */

// mixin

const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export function xhrPromise(options = {}) {
  const { method, url, errorMessage, body, headers } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  if (!(method === 'DELETE')) {
    Object.entries(headers).forEach(([k, v]) => {
      xhr.setRequestHeader(k, v);
    });
  }

  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        // complete
        if (xhr.status >= 200 && xhr.status < 400) {
          //
          resolve(JSON.parse(xhr.response));
        } else {
          //
          reject({ message: '데이터 통신이 원할하지 않습니다' });
        }
      }
    });
  });
}

xhrPromise({
  method: 'GET',
  url: END_POINT,
})
  .then((결과) => {
    // console.log(결과);
  })
  .catch((에러) => {
    console.log(에러);
  });

xhrPromise.get = (url) => xhrPromise({ url });
xhrPromise.post = (url, body) => xhrPromise({ url, body, method: 'POST' });
xhrPromise.put = (url, body) => xhrPromise({ url, body, method: 'PUT' });
xhrPromise.delete = (url) => xhrPromise({ url, method: 'DELETE' });

// xhrPromise
//   .get(END_POINT)
//   .then((res) => {
//     res.forEach(({ website }) => {
//       const tag = `
// 			<div>${website}</div>
// 		`;
//       document.body.insertAdjacentHTML('beforeend', tag);
//     });
//   })
//   .then(() => {})
//   .catch(() => {});
