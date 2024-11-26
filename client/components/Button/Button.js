// 1. 클래스 정의 및 HTMLElement 확장
export class Button extends HTMLElement {
  // 2. 생성자: 컴포넌트 초기화
  constructor() {
    super(); // HTMLElement의 생성자 호출

    // 3. 쉐도우 DOM 생성
    this.attachShadow({ mode: 'open' });
    // - 쉐도우 DOM을 생성하고, 캡슐화된 DOM 트리를 생성합니다.
    // - 'open': 외부 코드에서 shadowRoot에 접근 가능.

    // 4. 상태 초기화
    this.state = {
      active: this.getAttribute('active') || false,
      // - 'active' 속성값을 가져와 상태로 설정합니다. 값이 없으면 기본값으로 false.
    };

    // 5. 컴포넌트 렌더링
    this.render();
    // - 초기 렌더링을 수행해 DOM과 스타일을 생성합니다.
  }

  // 6. 관찰할 속성 정의
  static get observedAttributes() {
    return ['active'];
    // - 컴포넌트에서 관찰할 속성 목록을 정의합니다.
    // - 'active' 속성값이 변경될 때 자동으로 콜백(attributeChangedCallback)이 호출됩니다.
  }

  // 7. 속성 변경 시 동작 정의
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'active') {
      // - 변경된 속성이 'active'일 경우에만 실행.
      this.state.active = newValue === 'true';
      // - 새 속성 값을 state에 반영. 'true' 문자열을 Boolean으로 변환.
      this.render();
      // - 변경된 속성을 반영해 다시 렌더링.
    }
  }

  // 8. 클릭 이벤트 핸들러
  handleClick() {
    const newActiveState = !this.state.active;
    // - 현재 active 상태를 반전.
    this.setAttribute('active', newActiveState);
    // - 'active' 속성을 새 상태로 업데이트.
    // - 속성이 변경되면 attributeChangedCallback이 호출됩니다.
  }

  // 9. 렌더링 메서드
  render() {
    const { active } = this.state;
    // - 상태(state)에서 active 값을 가져옵니다.

    // 10. 쉐도우 DOM에 HTML과 스타일 추가
    this.shadowRoot.innerHTML = `
    <style>
		@import url('./components/Button/Button.css'); 
		/* - 외부 CSS 파일을 가져옵니다. */
		button {
			background-color: ${active ? 'orange' : 'skyblue'}; 
			/* - active 상태에 따라 버튼의 배경색 변경. */
		}
		</style>
    <button 
      type="button"
      aria-pressed="${active}" 
      /* - 버튼의 ARIA 상태를 업데이트. 접근성 지원 */
      aria-label="${active ? '활성화' : '비활성화'}" 
      /* - 현재 상태에 맞는 라벨 설정. */
    >
      ${active ? '🐯' : '❌'} 
      /* - active 상태에 따라 버튼 내부 텍스트 변경. */
    </button>
  `;

    // 11. 클릭 이벤트 리스너 추가
    this.shadowRoot
      .querySelector('button')
      // - 렌더링된 버튼 요소를 선택.
      .addEventListener('click', this.handleClick.bind(this));
    // - 버튼 클릭 시 handleClick 메서드 실행.
  }
}
