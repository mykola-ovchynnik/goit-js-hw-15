const input = document.querySelector('input');
const text = document.querySelector('#text');

function fontAdjustment(evt) {
  text.style.fontSize = `${evt.currentTarget.value}px`;
}
input.addEventListener('input', fontAdjustment);
