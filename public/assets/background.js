/* eslint-disable no-undef */
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    console.log(tab);
    console.log("tab updated");
    console.log(changeInfo.status);
  }
});

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, { action: "toggleApp" });
});
