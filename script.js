setInterval(setClock, 1000);
setInterval(checkAlarm, 1000);
const button = document.getElementById('btn');


let currentAlarms = 0;
const ring = new Audio('sounds/Alarm-clock-bell-ringing-sound-effect.mp3')


const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function checkAlarm() {
    const currentDate = new Date();
    const hrs = currentDate.getHours();
    const mins = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    let hrsString;
    if (hrs % 10 != hrs) {
        hrsString = `${hrs}`
    } else {
        hrsString = `0${hrs}`
    }
    let minsString;
    if (mins % 10 != mins) {
        minsString = `${mins}`
    } else {
        minsString = `0${mins}`
    }

    const h1 = document.getElementById('h1');
    const h2 = document.getElementById('h2');
    const h3 = document.getElementById('h3');
    const h4 = document.getElementById('h4');
    const timings = [h1, h2, h3, h4];
    for (let timing of timings) {

        if (timing.textContent == `${hrsString}:${minsString}` && seconds == 0) {
            ring.play();
            break;
        }
        else continue;
    }
}

function addAlarm() {
    if (currentAlarms >= 4) return;
    let input = prompt('Enter Time in HHMM 24-Hour Format!', '0000');
    if (!input) return;
    if (!checkValidity(parseFloat(input))) {
        alert('Enter Valid Input');
        return;
    }
    const hrs = input.substring(0, 2);
    const mins = input.substring(2, 5);
    const currentAlarm = document.getElementById(`alarm${currentAlarms + 1}`);
    const alarmTime = document.getElementById(`h${currentAlarms + 1}`);
    alarmTime.textContent = `${hrs}:${mins}`
    currentAlarm.hidden = false;
    currentAlarms++;

}

function checkValidity(num) {
    if (num >= 2400 || num < 0) return false;
    if (num % 100 > 59) return false;
    return true;
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--angle', rotationRatio * 360)
}

setClock()


