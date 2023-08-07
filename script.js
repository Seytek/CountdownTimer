const daysEl = document.getElementById('days');     //find the element from html so later we can change it
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const jobApply = "1 Dec 2023";      // our deadline date

function countdown() {
    const jobApplyDate = new Date(jobApply);    // total miliseconds from 1970 till my deadline date
    const currentDate = new Date();     // total miliseconds from 1970 till today

    const totalSeconds = (jobApplyDate-currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}


function formatTime(time) {
    return time < 10 ? "0" + time : time;
}


// we call our function every second
countdown();
setInterval(countdown, 1000);

