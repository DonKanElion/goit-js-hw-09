const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    bodyId: document.querySelector('body'),
    timeId: null,
};

refs.startBtn.addEventListener('click', () => {
     refs.timerId = setInterval(() => {
        getRandomHexColor();
        refs.startBtn.setAttribute('disabled', 'disabled');
      refs.stopBtn.removeAttribute('disabled');
      }, 1000);  
});

refs.stopBtn.addEventListener("click", () => {
    clearInterval(refs.timerId);
    refs.startBtn.removeAttribute('disabled');
    refs.stopBtn.setAttribute('disabled', 'disabled')
  });


function getRandomHexColor() {
    return refs.bodyId.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
