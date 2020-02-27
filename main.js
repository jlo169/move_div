
$(document).ready(initializeApp);

const colors = ['red', 'blue', 'yellow', 'green'];
let colorIndex = 0;

console.log('outside the initialize app')

function initializeApp() {
  $('.redSquare').on('click', colorDiv);
}

function colorDiv() {
  colorIndex++;
  if (colorIndex === colors.length) {
    colorIndex = 0;
  } 

  $('.redSquare').css('background-color', colors[colorIndex]);
  console.log('pug pug')
}