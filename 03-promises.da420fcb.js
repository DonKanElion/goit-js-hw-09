document.querySelector("input[name=delay]"),document.querySelector("input[name=step]"),document.querySelector("input[name=amount]"),document.querySelector("button[type=submit]");(function(e,t){const o=Math.random()>.3;return new Promise(((e,t)=>{setTimeout((()=>{o&&e("Успіх!!!!!"),t("Все пропало це reject!!1")}),2e3)}))})().then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}));
//# sourceMappingURL=03-promises.da420fcb.js.map
