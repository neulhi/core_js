import { LitElement, html } from 'lit'; // Lit 라이브러리에서 필요한 모듈을 가져옴
import "/src/components/TodoItem/TodoItem"; // TodoItem 컴포넌트를 불러옴

class TodoList extends LitElement {

  // 컴포넌트의 속성 정의 (todoItems: Array)
  static properties = {
    todoItems: { type: Array },
  };

  // 생성자: 초기 상태를 설정
  constructor() {
    super();
    // `localStorage`에서 To-Do 목록 불러오기 (없으면 빈 배열 사용)
    this.todoItems = JSON.parse(localStorage.getItem('todo')) || [];
  }

  // 새로운 항목 추가
  handleAddItem() {
    const newItem = { id: Date.now(), value: '', checked: false }; // 고유 ID, 초기 값, 완료 상태 설정
    this.todoItems = [...this.todoItems, newItem]; // 기존 항목에 추가
    this.saveData(); // 저장
  }

  // 항목 삭제
  handleDelete(id) {
    // 해당 ID를 제외한 나머지 항목만 유지
    this.todoItems = this.todoItems.filter((item) => item.id !== id);
    this.saveData(); // 저장
  }

  // 항목 업데이트 (체크 상태나 값 변경)
  handleUpdate(id, updateItem) {
    this.todoItems = this.todoItems.map((item) =>
      item.id === id ? { ...item, ...updateItem } : item // ID가 일치하는 항목만 업데이트
    );
    this.saveData(); // 저장
  }

  // 데이터를 `localStorage`에 저장
  saveData() {
    localStorage.setItem('todo', JSON.stringify(this.todoItems));
  }

  // 렌더링 함수
  render() {
    return html`
      <div class="container">
        <h1>TO DO LIST</h1>
        <ul class="todo">
          ${this.todoItems.map(
            (item) =>
              html /* html */ `
                <!-- TodoItem 컴포넌트를 렌더링 -->
                <todo-item
                  .id=${item.id}
                  .value=${item.value}
                  .checked=${item.checked}
                  @update=${(e) => this.handleUpdate(item.id, e.detail)}
                  @delete=${() => this.handleDelete(item.id)}
                ></todo-item>
              `
          )}
        </ul>
        <!-- 항목 추가 버튼 -->
        <button type="button" class="add-item" @click=${this.handleAddItem}>+</button>
      </div>
    `;
  }
}

// TodoList 컴포넌트를 등록
customElements.define('todo-list', TodoList);
