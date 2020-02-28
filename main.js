
$(document).ready(initializeApp);

const colors = ['red', 'blue', 'yellow', 'green'];
let colorIndex = 0;
const background = $('.background');
const square = $('.square');
const maxValue = background.width() - square.width();
const keyPressed = {};
const distance = 3;

function initializeApp() {
  square.on('click', colorDiv);
  $(window).keydown((sand) => {keyPressed[sand.which] = true});
  $(window).keyup((sand) => {keyPressed[sand.which] = false});
}

function colorDiv() {
  colorIndex++;
  if (colorIndex === colors.length) {
    colorIndex = 0;
  } 

  square.css('background-color', colors[colorIndex]);
}

function moveDaDiv(oVal, key1, key2) {
  const nVal = parseInt(oVal, 10)
    - (keyPressed[key1] ? distance : 0)
    + (keyPressed[key2] ? distance : 0);
  return nVal < 0 ? 0 : nVal > maxValue ? maxValue : nVal;
}

