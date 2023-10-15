const input = document.querySelector('input');
const dataCreate = document.querySelector('[data-create]');
const dataDestroy = document.querySelector('[data-destroy');
const boxes = document.querySelector('#boxes');

dataCreate.addEventListener('click', createBoxes);

dataDestroy.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  const amount = parseInt(input.value);
  let baseSize = 30; // size for the first box

  const createMarkup = Array.from({ length: amount }, (_, index) => {
    //enhansed creation of array with mapping function
    const boxStyle = `width: ${baseSize}px; height: ${baseSize}px; background-color: ${getRandomHexColor()};`;
    baseSize += 10;

    return `<div class="box"
      style="${boxStyle}">
      <span class="box-index">${index + 1}</span>
      </div>`;
  });

  // for (let index = 0; index < amount; index += 1) {
  // const boxStyle = `width: ${baseSize}px; height: ${baseSize}px; background-color: ${getRandomHexColor()};`;
  //   baseSize += 10;

  //   markup.push(
  //     `<div class="box"
  //     style="${boxStyle}">
  //     <span class="box-index">${index}</span>
  //     </div>`
  //   );
  // }

  boxes.insertAdjacentHTML('afterbegin', createMarkup.join('')); // insert of all boxes into html with one repaint
  input.value = '';
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
