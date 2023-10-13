const input = document.querySelector('input');
const dataLength = parseInt(input.getAttribute('data-length'));

const validationHandler = () => {
  const isLengthValid = input.value.length === dataLength;

  input.classList.toggle('valid', isLengthValid);
  input.classList.toggle('invalid', !isLengthValid);
};

input.addEventListener('blur', validationHandler);
