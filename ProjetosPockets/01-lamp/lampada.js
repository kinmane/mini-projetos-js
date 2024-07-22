const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const breakButton = document.getElementById('break');
const repairButton = document.getElementById('repair');

function isLampBroken() {
  return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
  if (!isLampBroken()) {
    lamp.src = './img/ligada.jpg';
  }
}

function lampOff() {
  if (!isLampBroken()) {
    lamp.src = './img/desligada.jpg';
  }
}

function lampBroken() {
  lamp.src = './img/quebrada.jpg';
}

function lampRepaired() {
  lamp.src = './img/desligada.jpg';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
breakButton.addEventListener('click', lampBroken);
repairButton.addEventListener('click', lampRepaired);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
