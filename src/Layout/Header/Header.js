import style from '/src/Layout/Header/Header.css?inline'
import s from '/src/tailwind.css?inline'

// css text import
// import로 css를 가져오면 된다 경로 뒤에 ?inline 후 ${} 사용
// 궁합은 별로 좋지 않음 module.css 쓰는게 좋음

export class Header extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
		<style>${s}</style>
			<header class="flex justify-between p-6 bg-slate-300">
				<h1 class="logo font-bold">
					<a href="/">🐶HOLA</a>
				</h1>
				<nav>
				<ul class="flex gap-5">
					<li><a href="/">HOME</a></li>
					<li><a href="/">PRODUCT</a></li>
					<li><a href="/">CONTACT</a></li>
				</ul>
				</nav>
			</header>
		`;
  }
}

customElements.define('c-header', Header);
