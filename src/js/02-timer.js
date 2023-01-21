
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const satrtButton = document.querySelector('[data-start]');
const inputDate = document.querySelector('input#datetime-picker');
const daysId = document.querySelector('[data-days]');
const hoursId = document.querySelector('[data-hours]');
const minutesId = document.querySelector('[data-minutes]');
const secondsId = document.querySelector('[data-seconds]');
let idTime = false;
const calendar = flatpickr(inputDate, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    const teamMeetingDate = new Date(selectedDates[0]).getTime();
    activeBtn(teamMeetingDate)
    },
});
satrtButton.disabled = true;

satrtButton.addEventListener('click', startTimer);

function startTimer() {
    satrtButton.disabled = true;
    const intervalID = setInterval(() => {
        satrtButton.disabled = true;
        const chosenDate = new Date(inputDate.value).getTime();
        const actuallyTime = Date.now();
        const timer = convertMs(chosenDate - actuallyTime)
        console.log(timer);
        refreshHtml(timer);
        stopTimer(intervalID)
        idTime = true;
    }, 1000);
    if (idTime) {
        clearInterval(intervalID);
        return;
    };
};
function refreshHtml({ days, hours, minutes, seconds }) {
    daysId.innerHTML = String(days).padStart(2,0);
    hoursId.innerHTML = String(hours).padStart(2,0);;
    minutesId.innerHTML = String(minutes).padStart(2,0);
    secondsId.innerHTML = String(seconds).padStart(2,0);
};
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function activeBtn(date) {
    if (Date.now() <= date) {
        satrtButton.disabled = false;
        return;
    };
    window.alert('Please choose a date in the future');
};
function stopTimer(intervalID) {
    if (daysId.innerHTML === '00' && hoursId.innerHTML === '00' && minutesId.innerHTML === '00' && secondsId.innerHTML === '00') {
        clearInterval(intervalID);
        alert('Time is up');
    };
};
