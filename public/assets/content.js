/* eslint-disable no-undef */

(function () {
  "use strict";

  const injectTime = performance.now();
  (async () => {
    const { onExecute } = await import(
      // eslint-disable-next-line no-undef
      chrome.runtime.getURL("assets/main.js")
    );
    onExecute?.({
      perf: { injectTime, loadTime: performance.now() - injectTime },
    });
  })()
    .then(() => console.log("Injected React App"))
    .catch(console.error);
})();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleApp") {
    console.log("toggleApp");
    console.log(sender);
    const app = document.getElementById("root");
    app.style.display = app.style.display === "none" ? "block" : "none";
    sendResponse({ success: "toggled app!" });
  }
});
