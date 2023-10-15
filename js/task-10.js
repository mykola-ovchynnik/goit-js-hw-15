const selectors = {
  input: document.querySelector('input'),
  dataCreate: document.querySelector('[data-create]'),
  dataDestroy: document.querySelector('[data-destroy'),
  boxes: document.querySelector('#boxes'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleCreate = () => {
  const amount = parseInt(selectors.input.value);
  createBoxes(amount);
  selectors.input.value = '';
};

const handleDestroy = () => {
  destroyBoxes();
};

function createBoxes(amount) {
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

  selectors.boxes.insertAdjacentHTML('afterbegin', createMarkup.join('')); // insert of all boxes into html with one repaint
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

selectors.dataCreate.addEventListener('click', handleCreate);

selectors.dataDestroy.addEventListener('click', handleDestroy);
