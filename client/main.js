// named export (이름 내보내기) 별칭 추가가능 -> 원래이름 as .. -> import { } from '...'

// default export (기본 내보내기) 무조건 1개, 이름 변경도 가능 -> import ... from '...'

// rename, alias

// import { getNode as $, getNodes } from './lib/dom/getNode.js';
// import { insertLast } from './lib/dom/insert.js';
// import clearContents from './lib/dom/clearContents.js';

import {
  getNode as $,
  getNodes,
  typeError,
  insertLast,
  clearContents,
} from './lib/index.js';
{
  // 토이프로젝트 계산기 만들기
  /*
		1. input value 값 가져오기 (first,second)
     		- input 선택하기 
    		- input에게 input 이벤트를 걸어준다.
     		- input.value 값을 가져온다.

 		2. 숫자 더하기
    		- 숫자 형변환 

  	3. result 내용 비우기
     		- clearContents
	*/
}
/* global clearContents */

function phase1() {
  const first = getNode('#firstNumber');
  const second = getNode('#secondNumber');
  const result = getNode('.result');
  const clear = getNode('#clear');

  function handleInput() {
    const firstValue = Number(first.value);
    const secondValue = +second.value;
    const total = firstValue + secondValue;

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();

    clearContents(first);
    clearContents(second);

    result.textContent = '_';
  }

  first.addEventListener('input', handleInput);
  second.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}

function phase2() {
  const calculator = $('.calculator');
  const result = $('.result');
  const clear = $('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear)')];

  function handleInput() {
    const total = numberInputs.reduce((acc, cur) => acc + Number(cur.value), 0);

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();

    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }

  calculator.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}

phase2();
