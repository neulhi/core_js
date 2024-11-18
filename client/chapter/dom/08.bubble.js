/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */
const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', (e) => {
  // console.log('%c section', 'color:dodgerblue'); // %c -> 콘솔 출력 스타일 적용
  console.log('target', e.target); // target -> 마우스로 클릭한 대상
  console.log('currentTarget', e.currentTarget);
});

/*article.addEventListener('click', () => {
  console.log('%c section', 'color:hotpink');
});

p.addEventListener('click', (e) => {
	e.stopPropagation();
  console.log('%c section', 'color:orange');
});*/

/* 캡처링 ----------------------------------------------------------------- */
