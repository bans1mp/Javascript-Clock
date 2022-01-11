setInterval(setClock, 1000)
const button = document.getElementById('btn')
const list = document.getElementById('list');


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




function addAlarm(time) {
    const li = document.createElement('li');
    const hrs = Math.floor(time / 100);
    const minutes = time % 100;
    if (minutes != 0 && hrs != 0) {
        li.innerHTML = `${hrs}:${minutes}`
    } else if (minutes == 0 || hrs == 0) {
        if (hrs == 0) {
            li.innerHTML = `00:${minutes}`

        }
        else {
            li.innerHTML = `${hrs}:00`
        }

    }

    list.appendChild(li);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--angle', rotationRatio * 360)
}

setClock()

addAlarm(0000);
