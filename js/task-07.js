const input = document.querySelector('input');
const text = document.querySelector('#text');

input.addEventListener('input', evt => {
  text.style.fontSize = `${evt.currentTarget.value}px`;
});
