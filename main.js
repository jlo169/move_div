
$(document).ready(initializeApp);

const colors = ['red', 'blue', 'yellow', 'green'];
let colorIndex = 0;
const background = $('.background');
const square = $('.redSquare');
const keyPressed = {};
const distance = 3;

function initializeApp() {
  $('.redSquare').on('click', colorDiv);
  $(window).keydown((sand) => {keyPressed[sand.which] = true});
  $(window).keyup((sand) => {keyPressed[sand.which] = false});
}

function colorDiv() {
  colorIndex++;
  if (colorIndex === colors.length) {
    colorIndex = 0;
  } 

  $('.redSquare').css('background-color', colors[colorIndex]);
}

function moveDaDiv(oVal, key1, key2) {
  const nVal = parseInt(oVal, 10);
}

