function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");const l=document.querySelector("button"),u=document.querySelector('input[name="delay"]'),d=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]');function s(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}l.addEventListener("click",(function(t){t.preventDefault();let n=parseInt(u.value),o=parseInt(d.value),i=parseInt(a.value);n&&o&&i&&(l.disabled=!0);for(let t=1;t<=i;t+=1)s(t,n).then((({position:t,delay:n})=>{t===i&&(l.disabled=!1),e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{t===i&&(l.disabled=!1),e(r).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),n+=o}));
//# sourceMappingURL=03-promises.c9d80b6c.js.map