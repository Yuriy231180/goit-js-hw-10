// Импорт IziToast
// Прослушивание ивента на клик по кнопке
// let timer_button = document.getElementById('timer-start');
// timer_button.addEventListener('click', () => {
// функция
//   });
let delay_ms = document.getElementById();
// После клика вызываем функцию, которая создаёт промис
let promise = new Promise(function () {
  setTimeout(function () {
    // Вызов тостов
    // Если rejected -  error
    iziToast.error({
      title: 'Error',
      message: `❌ Rejected promise in ${delay_ms}ms`,
    });
    //   Если success - success
    iziToast.success({
      title: 'OK',
      message: `✅ Fulfilled promise in ${delay_ms}ms`,
    });
  }, delay_ms);
});
