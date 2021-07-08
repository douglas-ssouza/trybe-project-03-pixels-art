const palette = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');
const btnClear = document.getElementById('clear-board');
const btnGenerate = document.getElementById('generate-board');
let paint = 'black';

window.onload = function() {
  addColors();
  addPixels(5);
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
  let colors = ['red', 'green', 'blue'];
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

function addPixels(tamanho) {
  for (let index = 0; index < tamanho * tamanho; index += 1) {
    let newPixel = createPixel();
    board.appendChild(newPixel);
  }
  board.style.width = (42 * tamanho) + 'px';
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

function paintPixel(event) {
  event.target.style.backgroundColor = paint;
}
board.addEventListener('click', paintPixel);

btnClear.addEventListener('click', function() {
  for (let pixel of board.children) {
    pixel.style.backgroundColor = 'white';
  }
});

function clearBoard() {
  for (let index = board.children.length - 1; index >= 0; index -= 1) {
    board.removeChild(board.children[index]);
  }
}

btnGenerate.addEventListener('click', function() {
  let tamanho = document.getElementById('board-size').value;
  
  if (tamanho >= 1) {
    clearBoard();
    if (tamanho <= 5) {
      addPixels(5);
    } else if (tamanho >= 50) {
      addPixels(50);
    } else {
      addPixels(tamanho);
    }
  } else {
    alert('Board inválido!');
  }

});