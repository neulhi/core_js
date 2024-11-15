/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// function handler() {
//   console.log('안녕?');
// }

// 2. DOM 프로퍼티 : element.onclick = handler
const about = getNode('.about');
const home = getNode('.home');
// about.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handler(e) {
  console.log(e);

  console.log(e.offsetX, e.offsetY);
}
// about.addEventListener('click', handler);
about.addEventListener('wheel', handler);

// 클릭 이벤트로 공 움직이기
const ground = getNode('.ground');
const ball = getNode('.ball');

function handleBall({offsetX:x, offsetY:y}) {

	// const {offsetX:x, offsetY:y} = e;

  // const x = e.offsetX;
  // const y = e.offsetY;

	const w = ball.offsetWidth;
	const h = ball.offsetHeight;

  ball.style.transform = `translate(${x - (w / 2)}px,${y - (h / 2)}px)`;
}

ground.addEventListener('click', handleBall);

function handleMove({offsetX:x, offsetY:y}) {

	// const w = ball.offsetWidth;
	// const h = ball.offsetHeight;

	// ball.style.transform = `translate(${x - (w / 2)}px,${y - (h / 2)}px)`;

	const template = `
		<div class="emotion" style="top:${y}px; left:${x}px;">👻</div>
	`

	insertLast(ground, template)
}

ground.addEventListener('mousemove', handleMove);




// debounce 

const input = getNode('input');

function handleInput() {
	if(this.value === 'hn@email.com')
	console.log('통과');
}

input.addEventListener('input', handleInput)

// closure 방식
/*function bindEvent(node, type, handler) {
  if (isString(node)) node = getNode(node);
  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}

const remove = bindEvent(about, 'click', handler);

// console.log(remove());
home.addEventListener('click', remove);*/

/* -------------------------------------------------------------------------- */

/*function handleHomeClick() {
  // about.removeEventListener('click', handler);
}

home.addEventListener('click', handleHomeClick);*/

// 화살표 함수방식
// home.addEventListener('click', () => {
//   about.removeEventListener('click', handler);
// });

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener
