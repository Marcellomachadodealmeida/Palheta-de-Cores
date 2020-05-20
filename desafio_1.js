window.addEventListener('load', start);

function start() {
  console.log('Brilll!!');
  RedColor.value = 0;
  GreenColor.value = 0;
  BlueColor.value = 0;
}

var RedColor = document.querySelector('#ColorRed');
var GreenColor = document.querySelector('#ColorGreen');
var BlueColor = document.querySelector('#ColorBlue');
BlueColor.addEventListener('input', FuncAllColor);
GreenColor.addEventListener('input', FuncAllColor);
RedColor.addEventListener('input', FuncAllColor);

function FuncAllColor() {
  var RedColor = document.getElementById('ColorRed').value;
  var outRed = document.querySelector('#outputColorRed');

  var BlueColor = document.getElementById('ColorBlue').value;
  var outBlue = document.querySelector('#outputColorBlue');

  var GreenColor = document.getElementById('ColorGreen').value;
  var outGreen = document.querySelector('#outputColorGreen');

  outBlue.textContent = BlueColor;
  outRed.textContent = RedColor;
  outGreen.textContent = GreenColor;

  var boxall = document.querySelector('#cube');
  let rgb = `rgb(${RedColor},${GreenColor},${BlueColor})`;
  boxall.style.background = rgb;
}
