
$(document).ready(initializeApp);

const colors = ['red', 'blue', 'yellow', 'green'];
let colorIndex = 0;
const maxValue = $('.background').width() - $('.square').width();
const keyPressed = {};
const distance = 10;

function initializeApp() {
  $('.square').on('click', colorDiv);
  $(window).keydown((sand) => {keyPressed[sand.which] = true});
  $(window).keyup((sand) => {keyPressed[sand.which] = false});

  setInterval(function() {
    $('.square').css({
      left: (index, oVal) => {
        return moveDaDiv(oVal, 37, 39);
      },
      top: (index, oVal) => {
        return moveDaDiv(oVal, 38, 40);
      }
    })
  }, 10);
}

function colorDiv() {
  console.log('inside colorDiv')
  colorIndex++;
  if (colorIndex === colors.length) {
    colorIndex = 0;
  } 
  $('.square').css('background-color', colors[colorIndex]);
}

function moveDaDiv(oVal, key1, key2) {
  const nVal = parseInt(oVal, 10)
    - (keyPressed[key1] ? distance : 0)
    + (keyPressed[key2] ? distance : 0);
  return nVal < 0 ? 0 : nVal > maxValue ? maxValue : nVal;
}



