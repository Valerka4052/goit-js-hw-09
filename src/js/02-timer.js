
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const satrtButton = document.querySelector('[data-start]')
const cal = document.querySelector('input#datetime-picker');

const fp = flatpickr(cal, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    console.log(selectedDates[0]);
       const teamMeetingDate = new Date(selectedDates[0]).getTime();
       
        
    },
});
function watch() {
    setInterval(() => {
            const actuallyTime = Date.now()
            console.log(teamMeetingDate-actuallyTime)
     },1000)
}

satrtButton.addEventListener('click',watch)
