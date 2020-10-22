const script = document.createElement('script')
script.type = 'module'
script.src = chrome.extension.getURL('./content/index.js') // TODO: Figure out the keyword to use instead of "chrome"
document.body.appendChild(script)