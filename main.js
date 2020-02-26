
$(document).ready(initializeApp);

console.log('outside the initialize app')

function initializeApp() {
  $('.redSquare').on('click', moveDiv);
}

function moveDiv() {
  console.log('pug pug')
}