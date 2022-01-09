const COLORS = document.querySelectorAll('.color');
const PIXEL_BOARD = document.querySelector('#pixel-board');

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

function generateBoard(size) {
  for(let line = 0; line < size; line += 1) {
    for (let column = 0; column < size; column += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      PIXEL_BOARD.appendChild(pixel);
    }
    const br = document.createElement('br');
    PIXEL_BOARD.appendChild(br);
  }
}

window.onload = () => {
  COLORS.forEach((color, index) => {
    color.style.backgroundColor = index === 0
      ? 'rgb(0, 0, 0)'
      : generateRandomColor();
  });

  generateBoard(5);
}