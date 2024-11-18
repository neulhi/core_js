const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

// console.log(aList);

// const h = (d) => (d.style.height = 0);
const h = (t) => {
  t.style.height = 0;
};

// depth top값 설정 코드

function vanilla() {
  {
    // header의 높이값을 가져와서 depth(3)의 top값으로 설정.
    // elem.offsetHeight
    // elem.style.top
    // console.log(header.offsetHeight);
  }
  depthList.forEach((depth) => (depth.style.top = header.offsetHeight + 'px'));

  {
    // 1. event binding => 'mouseenter' event => this 출력하기
    // 2. '현재 선택'된 a태그 안에 있는 depth 찾기
    // currentTarget + lastElementChild
    // 3. depth에게 높이(100px)
    // node.style.height = ???
    // 4. 모든 depth 높이 제거하기(0px)
    // 모든 depth를 가져오기 -> style 제거
    // 5. mouseleave -> 원래대로
  }
  aList.forEach((a) => {
    a.addEventListener('mouseenter', (e) => {
      const currentDepth = e.currentTarget.lastElementChild;

      depthList.forEach(h);

      currentDepth.style.height = '100px';
    });
  });

  header.addEventListener('mouseleave', () => {
    depthList.forEach(h);
  });
}

/* global gsap */
// GSAP 애니메이션
gsap.set(depthList, { top: header.offsetHeight });

aList.forEach((a) => {
  const currentDepth = a.lastElementChild;

  const tl = gsap
    .timeline({ paused: true })
    .to(currentDepth, { height: 100, ease: 'power2.inOut' });

  a.addEventListener('mouseenter', () => tl.play());
  a.addEventListener('mouseleave', () => tl.reverse());
});
