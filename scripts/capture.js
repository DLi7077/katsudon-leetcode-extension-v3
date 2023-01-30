// You can use `browser`/`chrome` here and interact with extension stuff like storage and tabs.

const s = document.createElement("script");
s.src = chrome.runtime.getURL("scripts/injected.js");
s.onload = async function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);
