
$(document).ready(initializeApp);

const colors = ['red', 'blue', 'yellow', 'green'];
let colorIndex = 0;
let maxValueX;
let maxValueY;
const keyPressed = {};
const distance = 10;

function initializeApp() {
  $('.square').on('click', colorDiv);
  $(window).keydown((sand) => {keyPressed[sand.which] = true});
  $(window).keyup((sand) => {keyPressed[sand.which] = false});
  maxValueX = $('.background').height() - ($('.square').height() - 50);
  maxValueY = $('.background').width() - ($('.square').width() - 50);
  console.log('maxValueX is', maxValueX);
  console.log('maxValueY is', maxValueY);

  setInterval(function() {
    $('.square').css({
      left: (index, oVal) => {
        return moveDaDiv(oVal, 37, 39, maxValueY);
      },
      top: (index, oVal) => {
        return moveDaDiv(oVal, 38, 40, maxValueX);
      }
    })
  }, 10);
}

function colorDiv() {
  colorIndex++;
  if (colorIndex === colors.length) {
    colorIndex = 0;
  } 
  $('.square').css('background-color', colors[colorIndex]);
}

function moveDaDiv(oVal, key1, key2, maxValue) {
  const nVal = parseInt(oVal, 10)
    - (keyPressed[key1] ? distance : 0)
    + (keyPressed[key2] ? distance : 0);
  return nVal < 50 ? 50 : nVal > maxValue ? maxValue : nVal;
}



