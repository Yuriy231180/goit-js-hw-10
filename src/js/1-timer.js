import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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

function addLeadingZero(_num) {
  return String(_num).padStart(2, '0');
}

function startTimer(_timeobj) {
  // ms
  let convert_timeobj = convertMs(_timeobj);
  let _timer_elements = document.querySelectorAll('[data-timer]');
  _timer_elements.forEach(timer_element => {
    timer_element.innerHTML = addLeadingZero(
      convert_timeobj[timer_element.getAttribute('data-timer')]
    );
  });

  let _old_seconds = _timeobj - 1000;
  if (_old_seconds <= 0) {
    return false;
  }
  const interval = setInterval(() => {
    clearInterval(interval);
    startTimer(_old_seconds);
  }, 1000);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    // Нужно сравнить выбраную дату и текущую. Если прошлое - кидаем алерты
    let msDate = userSelectedDate - new Date();
    if (msDate <= 0) {
      // Alert
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
    } else {
      let timer_button = document.getElementById('timer-start');
      timer_button.addEventListener('click', () => {
        startTimer(msDate);
      });
    }
  },
};

// Инииализация календаря
let element = document.getElementById('datetime-picker');
let userSelectedDate;
flatpickr(element, options);
