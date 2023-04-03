chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'executeScript') {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      function: request.script,
    }, sendResponse);
  }
  return true;
});
