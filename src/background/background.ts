import backgroundReducers from 'background/backgroundReducers';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  backgroundReducers(message, sender, sendResponse).then((data) => sendResponse(data));

  return true;
});

const sendBackgroundAction = (data: any) => new Promise((resolve) => chrome.runtime.sendMessage(data, resolve));

export default sendBackgroundAction;
