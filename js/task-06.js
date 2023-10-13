const input = document.querySelector('input');
const dataLength = parseInt(input.getAttribute('data-length'));

const validationHandler = evt => {
  const event = evt.currentTarget;
  const isLengthValid = event.value.length === dataLength;

  event.classList.toggle('valid', isLengthValid);
  event.classList.toggle('invalid', !isLengthValid);
};

input.addEventListener('blur', validationHandler);
