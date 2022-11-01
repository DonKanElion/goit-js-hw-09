// import Notiflix from 'notiflix';

const refs = {
  inputDelay: document.querySelector('input[name=delay]'),
  inputStep: document.querySelector('input[name=step]'),
  inputAmount: document.querySelector('input[name=amount]'),
  submitBtn: document.querySelector('button[type=submit]'),

}

// console.log(refs.inputDelay);
// console.log(refs.inputStep);
// console.log(refs.inputAmount);
// console.log(refs.submitBtn);

function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {

        setTimeout(() => {
          if(shouldResolve){
           resolve('Успіх!!!!!');
          }
          reject('Все пропало це reject!!1');
        }, 2000);
  });

  // if (shouldResolve) {
  //   // Fulfill
  // } else {
  //   // Reject
  // }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });