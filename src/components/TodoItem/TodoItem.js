import { LitElement, html } from "lit"; // Lit 라이브러리에서 필요한 모듈을 가져옴

class TodoItem extends LitElement {
  // 컴포넌트의 속성 정의 (id: Number, value: String, checked: Boolean)
  static properties = {
    id: { type: Number },
    value: { type: String },
    checked: { type: Boolean },
  };

  // 생성자: 초기 상태 설정
  constructor() {
    super();
    this.id = 0; // 항목 ID
    this.value = ''; // 항목 내용
    this.checked = false; // 완료 여부
  }

  // 체크박스 클릭 핸들러: 완료 상태 토글
  handleToggleClicked() {
    this.checked = !this.checked; // 완료 상태 반전

    // 부모 컴포넌트로 업데이트 이벤트 전달
    this.dispatchEvent(
      new CustomEvent('update', {
        detail: { checked: this.checked }, // 변경된 완료 상태 전달
        bubbles: true, // 이벤트가 상위 요소로 전파됨
        composed: true, // Shadow DOM 외부에서도 이벤트를 받을 수 있음
      })
    );
  }

  // 삭제 버튼 클릭 핸들러
  handleDelete() {
    // 부모 컴포넌트로 삭제 이벤트 전달
    this.dispatchEvent(
      new CustomEvent('delete', {
        bubbles: true, // 이벤트가 상위 요소로 전파됨
        composed: true, // Shadow DOM 외부에서도 이벤트를 받을 수 있음
      })
    );
  }

  // 입력 필드 값 변경 핸들러
  handleValueChange(e) {
    this.value = e.target.value; // 입력 값을 업데이트
  }

  // 입력 필드에서 포커스가 사라졌을 때 호출 (Blur 이벤트 핸들러)
  handleBlur() {
    // 부모 컴포넌트로 업데이트 이벤트 전달
    this.dispatchEvent(
      new CustomEvent('update', {
        detail: { value: this.value }, // 변경된 값을 전달
        bubbles: true, // 이벤트가 상위 요소로 전파됨
        composed: true, // Shadow DOM 외부에서도 이벤트를 받을 수 있음
      })
    );
  }

  // 렌더링 함수
  render() {
    return html /* html */ `
      <li class="item">
        <!-- 완료 여부를 표시하는 체크박스 -->
        <input 
          type="checkbox"
          .checked=${this.checked}
          @click=${this.handleToggleClicked}
        />
        <!-- 항목 내용을 입력할 수 있는 텍스트 필드 -->
        <input 
          type="text"
          .value=${this.value}
          @input=${this.handleValueChange}
          @blur=${this.handleBlur}
        />
        <!-- 삭제 버튼 -->
        <button type="button" class="delete" @click=${this.handleDelete}>X</button>
      </li>
    `;
  }
}

// TodoItem 컴포넌트를 등록
customElements.define('todo-item', TodoItem);
