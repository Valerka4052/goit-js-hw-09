startButton=document.querySelector("button[data-start]"),stopButton=document.querySelector("button[data-stop]"),body=document.querySelector("body"),console.log(body),stopButton.disabled=!0,startButton.addEventListener("click",(function(){interval=setInterval((function(){body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),startButton.disabled=!0,stopButton.disabled=!1})),stopButton.addEventListener("click",(function(){clearInterval(interval),startButton.disabled=!1,stopButton.disabled=!0}));
//# sourceMappingURL=01-color-switcher.c02675f2.js.map