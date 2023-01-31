// Injecting a script to browser
// Source : https://stackoverflow.com/a/67390377
const injectionScript = document.createElement("script");
injectionScript.src = chrome.runtime.getURL("scripts/injected.js");
injectionScript.onload = async function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(injectionScript);
