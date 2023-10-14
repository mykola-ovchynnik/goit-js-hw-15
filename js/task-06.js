const input = document.querySelector('input');
const dataLength = parseInt(input.getAttribute('data-length'));

function validationHandler(evt) {
  const isLengthValid = this.value.length === dataLength;

  this.classList.toggle('valid', isLengthValid);
  this.classList.toggle('invalid', !isLengthValid);
}

input.addEventListener('blur', validationHandler);
