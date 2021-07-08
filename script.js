const palette = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');
const btnClear = document.getElementById('clear-board');
const btnGenerate = document.getElementById('generate-board');
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'purple', 'gray', 'brown'];
let paint = 'black';

function createColor() {
  const newColor = document.createElement('div');
  newColor.className = 'color';
  return newColor;
}

function setFirstColor() {
  const firstColor = createColor();
  firstColor.className += ' selected';
  firstColor.style.backgroundColor = 'black';
  palette.appendChild(firstColor);
}

/**
 * Source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * Consultei o stack overflow para achar uma solução para embaralhar o array que criei com as cores para a paleta
 */
function shuffle(array) {
  // indice atual recebe o tamanho do array
  let currentIndex = array.length;
  // inicializa variável para guardar um indice aleatório
  let randomIndex;

  // enquanto restar elementos a serem embaralhados...
  while (currentIndex !== 0) {
    // Escolhe um elemento sobrando
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Troca o elemento escolhido com o elemento atual
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function addColors() {
  setFirstColor();
  const newPalette = shuffle(colors);
  for (let index = 0; index < 3; index += 1) {
    const newColor = createColor();
    newColor.style.backgroundColor = newPalette[index];
    palette.appendChild(newColor);
  }
}

function createPixel() {
  const newPixel = document.createElement('div');
  newPixel.className = 'pixel';
  newPixel.style.backgroundColor = 'white';
  return newPixel;
}

function addPixels(tamanho) {
  for (let index = 0; index < tamanho * tamanho; index += 1) {
    const newPixel = createPixel();
    board.appendChild(newPixel);
  }
  const largura = tamanho * 42;
  board.style.width = largura + 'px';
}

function changeClassSelected() {
  for (const color of palette.children) {
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

function clearBoard() {
  for (const pixel of board.children) {
    pixel.style.backgroundColor = 'white';
  }
}
btnClear.addEventListener('click', clearBoard);

function removeBoard() {
  for (let index = board.children.length - 1; index >= 0; index -= 1) {
    board.removeChild(board.children[index]);
  }
}

function generateBoard() {
  const tamanho = document.getElementById('board-size').value;

  if (tamanho >= 1) {
    removeBoard();
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
}
btnGenerate.addEventListener('click', generateBoard);

window.onload = function initialRenderization() {
  addColors();
  addPixels(5);
};
