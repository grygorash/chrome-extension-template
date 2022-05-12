import contentReducers from 'content/contentReducers';

chrome.runtime.onMessage.addListener(contentReducers);

const sendContentAction = (data: any) => new Promise((resolve) => chrome.tabs.query(
  { active: true, currentWindow: true },
  ([{ id }]) => chrome.tabs.sendMessage(id || 0, data, resolve),
));

export default sendContentAction;
