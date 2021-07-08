const palette = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');
const colors = palette.children;
let paint = 'black';

window.onload = function() {
  addColors();
  addPixels();
}

function createColor() {
  let newColor = document.createElement('div');
  newColor.className = 'color';
  return newColor;
}

function firstColor() {
  let firstColor = createColor();
  firstColor.className += ' selected';
  firstColor.style.backgroundColor = 'black';
  palette.appendChild(firstColor);
}

function addColors() {
  firstColor();
  let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'gray'];
  for (let index = 0; index < colors.length; index += 1) {
    let newColor = createColor();
    newColor.style.backgroundColor = colors[index];
    palette.appendChild(newColor);
  }
}

function createPixel() {
  let newPixel = document.createElement('div');
  newPixel.className = 'pixel';
  newPixel.style.backgroundColor = 'white';
  return newPixel;
}

function addPixels() {
  for (let index = 0; index < 25; index += 1) {
    let newPixel = createPixel();
    board.appendChild(newPixel);
  }
}

function changeClassSelected() {
  for (let color of palette.children) {
    color.className = 'color';
  }
}

function selectColor(event) {
  changeClassSelected();
  paint = event.target.style.backgroundColor;
  event.target.classList.add('selected');
}
palette.addEventListener('click', selectColor);

