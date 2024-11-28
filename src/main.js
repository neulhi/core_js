import '@/style/style.css';
import { getNode, insertLast } from 'kind-tiger';
import santa from '@/assets/santa.png'; // 하나만 가져오는거라 이름 변경 가능
import { btn } from '@/style/style.module.css';

const app = getNode('#app');

const template = /* html */ `
	<figure class="container">
	<img style="width: 30vw" src="${santa}" />
	<figcaption>산타 모자를 쓴 호랑이</figcaption>
	</figure>
	<button type="button" class="${btn}">BUTTON</button>
`;

insertLast(app, template);
