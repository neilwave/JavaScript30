
const secondHand = document.querySelector('.second-hand'); // grab second-hand class
const minsHand = document.querySelector('.min-hand'); // grab min-hand class
const hrsHand = document.querySelector('.hour-hand'); // grab min-hand class

function setDate() {
    const now = new Date(); // get the current date and time ...

    const seconds = now.getSeconds(); // get the seconds
    const secondsDegrees = ((seconds / 60) * 360) + 90; // offset default 90deg, put the seconds in the right ratio
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    secondHand.style.backgroundColor = 'lightskyblue'; // just some different color

    const mins = now.getMinutes();
    const minutesDegrees = ((mins / 60) *360 ) + 90;
    minsHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) *360 ) + 90;
    hrsHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // transition glitch bugfix
    // for seconds
    if(secondsDegrees == '90') {
        secondHand.style.transitionProperty = 'none';
    } else (secondHand.style.transitionProperty = 'all');
    // for minutes
    if(minutesDegrees == '90') {
        minsHand.style.transitionProperty = 'none';
    } else (minsHand.style.transitionProperty = 'all');
    // for hours
    if(hoursDegrees == '90') {
        hrsHand.style.transitionProperty = 'none';
    } else (hrsHand.style.transitionProperty = 'all');
}

setInterval(setDate, 1000);

setDate();

