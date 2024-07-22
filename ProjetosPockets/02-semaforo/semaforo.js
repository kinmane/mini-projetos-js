const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;
let lightsOn = true;

const trafficLight = (event) => {
    stopAutomatic();
    if (event.target.id === 'turnOffLights') {
        turnOffLights();
    } else {
        turnOn[event.target.id]();
    }
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    if (lightsOn) {
        const colors = ['red', 'yellow', 'green']
        const color = colors[colorIndex];
        turnOn[color]();
        nextIndex();
    }
}

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const turnOn = {
    'red': () => {
        lightsOn = true;
        img.src = './img/vermelho.png';
    },
    'yellow': () => {
        lightsOn = true;
        img.src = './img/amarelo.png';
    },
    'green': () => {
        lightsOn = true;
        img.src = './img/verde.png';
    },
    'automatic': () => {
        lightsOn = true;
        intervalId = setInterval(changeColor, 1000);
    }
}

const turnOffLights = () => {
    lightsOn = false;
    img.src = './img/desligado.png';
}

buttons.addEventListener('click', trafficLight);
