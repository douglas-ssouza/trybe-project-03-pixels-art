const palette = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');

window.onload = function() {

}

function createColor() {
  let color = document.createElement('div');
  color.classList.add('color');
  return color;
}

function createPixel() {
  let pixel = document.createElement('div');
  pixel.classList.add('pixel');
  return pixel;
}