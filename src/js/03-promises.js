import Notiflix from 'notiflix';

const submitButton = document.querySelector('button');
const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');

submitButton.addEventListener('click', makePromiseWithDelay);

function makePromiseWithDelay (event) {
  event.preventDefault();
  let data = parseInt(firstDelay.value);
  let step = parseInt(delayStep.value);
  let counter = parseInt(amount.value);
  for (let position = 1; position <= counter; position += 1) {
    createPromise(position, data)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    data += step;
  };
};

function createPromise(position, delay) {
  return promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      };
    }, delay);
  });
};

