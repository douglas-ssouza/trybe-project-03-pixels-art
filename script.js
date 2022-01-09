const COLORS = document.querySelectorAll('.color');
const PIXEL_BOARD = document.querySelector('#pixel-board');
const INPUT_SIZE = document.querySelector('#input-size');
const CLEAR_BUTTON = document.querySelector('#btn-clear');
const BTN_VQV = document.querySelector('#btn-vqv');

CLEAR_BUTTON.addEventListener('click', clearBoard);
BTN_VQV.addEventListener('click', generateCustomBoard);


function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

function paintPixel(event) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selectedColor;
}

function generateBoard(size) {
  for(let line = 0; line < size; line += 1) {
    for (let column = 0; column < size; column += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.addEventListener('click', paintPixel);
      PIXEL_BOARD.appendChild(pixel);
    }
    const br = document.createElement('br');
    PIXEL_BOARD.appendChild(br);
  }
}

function selectColor(event) {
  COLORS.forEach(color => {
    color.classList.remove('selected');
  });
  event.target.classList.add('selected');
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = 'white';
  })
}

function generateCustomBoard() {
  const size = Number(INPUT_SIZE.value);
  PIXEL_BOARD.innerHTML = '';

  if (size < 5) {
    return generateBoard(5)
  }
  if (size > 50) {
    return generateBoard(50)
  }

  generateBoard(size);
}

window.onload = () => {
  COLORS.forEach((color, index) => {
    color.addEventListener('click', selectColor);
    color.style.backgroundColor = index === 0
      ? 'rgb(0, 0, 0)'
      : generateRandomColor();
  });

  generateBoard(5);
}