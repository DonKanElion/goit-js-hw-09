function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=r);var i=r("eWCmQ");function u(e,n){return new Promise(((t,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}function l({position:n,delay:t}){e(i).Notify.success(`Fulfilled promise ${n} in ${t}ms`)}function s({position:n,delay:t}){e(i).Notify.failure(`Rejected promise ${n} in ${t}ms`)}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const n=e.currentTarget.elements,t=n.delay.value,o=n.step.value,r=n.amount.value;for(let e=1;e<=Number(r);e+=1){const n=Number(t)+Number(o)*(e-1);u(e,n).then(l).catch(s)}}));
//# sourceMappingURL=03-promises.6efb9109.js.map
