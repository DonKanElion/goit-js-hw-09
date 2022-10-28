import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const refs = {
    input: document.querySelector("#datetime-picker"),
    startBtn: document.querySelector("button[data-start]"),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    min: document.querySelector('span[data-minutes]'),
    sec: document.querySelector('span[data-seconds]'),
}

refs.startBtn.setAttribute('disabled', 'disabled');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {

         if (selectedDates[0] > new Date()){
          return refs.startBtn.removeAttribute('disabled');
          };

      window.alert("Please choose a date in the future");

    },
    
    //   selectedDates[0] > new Date() ? 
    //   refs.startBtn.removeAttribute('disabled') : 
    //   window.alert("Please choose a date in the future");
    //  },   
  };

flatpickr(refs.input, options); 

const dataPickr = new flatpickr(refs.input, options);

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  console.log('WIN');
  const startTime = dataPickr.selectedDates[0];

  setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = startTime - currentTime;

    const time = convertMs(deltaTime);

    refs.days.textContent = time.days;
    refs.hours.textContent = time.hours;
    refs.min.textContent = time.minutes;
    refs.sec.textContent = time.seconds;
  }, 1000);
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0'); 
}


 function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}