const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    bodyId: document.querySelector('body'),
    timeId: null,
};

const changeColorBtn = refs.startBtn.addEventListener('click', nextColor) => 
    timerId = setInterval(() => {
        nextColor();
      }, 1000);
 
// const stopChangeBnt = refs.stopBtn.addEventListener('click', clearInterval) => 
// clearInterval(timerId);

    


function nextColor() {
refs.bodyId.style.background = `${getRandomHexColor()}`;
};


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }