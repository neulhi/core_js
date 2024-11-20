import data from './data/data.js';
import {
  copy,
  shake,
  addClass,
  getRandom,
  showAlert,
  insertLast,
  removeClass,
  getNode as $,
  clearContents,
  isNumericString,
} from './lib/index.js';

{
  // 주접 생성기
  // [phase-1]
  // 1. 주접 떨기 버튼을 클릭 하는 함수
  //    - 주접 떨기 버튼 가져오기
  //    - 이벤트 연결하기 addEventListener('click')
  // 2. input 값 가져오기
  //    - input.value
  // 3. data함수에서 주접 1개 꺼내기
  //    - data(name) -> n번째 random 주접을 꺼내기
  //    - getRandom() -> Math.random()
  // 4. pick 항목 result에 랜더링하기
  //    - insertLast()
  // [phase-2]
  // 5. 예외처리 (콘솔 출력)
  //    - 아무 값도 입력 받지 못했을 때 콘솔에 에러 출력
  //    - 숫자만 들어오면 콘솔에 에러 출력
}

const submit = $('#submit');
const nameField = $('#nameField');
const result = $('.result');

function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  // 만약에 name의 값이 '' 라면...
  if (!name || name.replaceAll(' ', '') === '') {
    // alert('제대로된 이름을 입력해 주세요.');

    showAlert('.alert-error', '공백은 허용하지 않습니다', 1200);

    // addClass(nameField, 'shake')
    shake(nameField);

    return;
  }

  if (!isNumericString(name)) {
    showAlert('.alert-error', '정확한 이름을 입력해 주세요', 1200);
    shake(nameField);
    return;
  }

  clearContents(result);
  insertLast(result, pick);
}

function handleCopy() {
  const text = this.textContent;

  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사 완료!');
  });
}

submit.addEventListener('click', handleSubmit);
result.addEventListener('click', handleCopy);
