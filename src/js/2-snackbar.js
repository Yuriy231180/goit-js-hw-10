
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');
const input = document.getElementsByTagName('input')[0];
input.classList.add('input');

const fieldset = document.querySelector('fieldset');
fieldset.classList.add('fieldset');
const fulfilled = document.getElementsByTagName('input')[1];
const rejected = document.getElementsByTagName('input')[2];
const button = document.querySelector('button');
button.classList.add('button');

form.addEventListener('submit', event => {
  const promise = new Promise((resolve, reject) => {
    event.preventDefault();

    let delay = input.value;
    const state = event.target.elements.state.value;

    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else if (state === 'rejected') reject(delay);
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        position: 'topRight',
        messageColor: '#FFFFFF',
        backgroundColor: '#59A10D',
        messageSize: '16px',
        messageLineHeight: '1.5',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        position: 'topRight',
        messageColor: '#FFFFFF',
        backgroundColor: '#EF4040',
        messageSize: '16px',
        messageLineHeight: '1.5',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});