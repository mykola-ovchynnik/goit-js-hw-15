const input = document.querySelector('input');
const text = document.querySelector('#text');

input.addEventListener('input', () => {
  text.setAttribute('style', `font-size: ${input.value}px`);
});
