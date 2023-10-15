const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = `${input.value}px`;

function handlerFont() {
  text.style.fontSize = `${this.value}px`;
}
input.addEventListener('input', handlerFont);
