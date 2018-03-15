import getElementFromTemplate from '../newDOM';
import greeting from './greeting';
import renderDOM from '../renderDOM';
import header from '../header';


const html = `<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>`;

const element = getElementFromTemplate(`${html}${header}`);
document.addEventListener(`click`, function (evt) {
  const star = document.querySelector(`.intro__asterisk`);
  if (evt.target === star) {
    renderDOM(greeting);
  }
});
export default element;
