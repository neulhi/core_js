const END_POINT = 'https://jsonplaceholder.typicode.com/users/2';

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
    'Content-Type': 'application.json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  // 객체의 key, value를 분리(Object.entries)
  // 반복문(forEach)

  if (!method === 'DELETE') {
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

xhr.delete(
	END_POINT,
	(data_콜백) => {
		console.log(data_콜백);
	}
)
