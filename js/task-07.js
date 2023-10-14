const input = document.querySelector('input');
const text = document.querySelector('#text');

function fontAdjustment() {
  text.style.fontSize = `${this.value}px`;
}
input.addEventListener('input', fontAdjustment);
