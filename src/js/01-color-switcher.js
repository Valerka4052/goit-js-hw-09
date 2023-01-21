// startButton = document.querySelector('button[data-start]');
// stopButton = document.querySelector('button[data-stop]');
body = document.querySelector('body');
console.log(body)
// stopButton.disabled = true;
// startButton.addEventListener('click', changeColor);
// stopButton.addEventListener('click', stopChangeColor);

function changeColor() {
    interval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
       startButton.disabled = true;
  stopButton.disabled = false;
};

function stopChangeColor() {
    clearInterval(interval);
    startButton.disabled = false;
    stopButton.disabled = true;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};