// Inject script to allow modular code
const script = document.createElement('script')
script.type = 'module'
script.src = chrome.extension.getURL('./content/index.js') // TODO: Figure out the keyword to use instead of "chrome"
document.body.appendChild(script)

// Inject commonmark for beaker.markdown
// TODO: Find a way to use import or alike (or perhaps only inject once needed?)
const markdownit = document.createElement('script')
markdownit.src = chrome.extension.getURL('./content/markdown/markdown-it.min.js') // TODO: Figure out the keyword to use instead of "chrome"
document.body.appendChild(markdownit)