const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  //   const { email, password } = this.elements;
  //   const data = {
  //     email: email.value,
  //     password: password.value,
  //   };

  const formData = new FormData(this);
  const data = {};

  let isEmptyField = false; // Empty field flag for every event

  formData.forEach((value, key) => {
    if (!value) {
      isEmptyField = true;
      alert(`All filds must be filled!\nField ${key} is empty!`);
    }

    data[key] = value;
  });

  if (isEmptyField) {
    return; // Break if any field is empty
  }

  console.log(data);
  this.reset();
}
