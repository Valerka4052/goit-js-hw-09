!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");console.log(n),e.disabled=!0,t.addEventListener("click",(function(){interval=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(interval),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.f6f77c79.js.map
