// Listen for messages from the popup or background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'clickDeploy') {
      const deployLink = document.getElementById('deploy');
      if (deployLink) {
        deployLink.click();
        sendResponse({ success: true });
      } else {
        sendResponse({ success: false, message: 'No element with id "deploy" found.' });
      }
    }
  });
  