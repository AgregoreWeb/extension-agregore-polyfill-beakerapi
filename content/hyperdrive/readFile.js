// Reference: https://docs.beakerbrowser.com/apis/beaker.hyperdrive#beakerhyperdrivereadfileurl-opts
function readFile(url, opts = {encoding: 'utf8', timeout: 60000}) {
	if(typeof opts === 'string') opts = {encoding: opts, timeout: 60000}
	const controller = new AbortController()
	const signal = controller.signal
	setTimeout(() => controller.abort(), opts.timeout)

	return fetch(url, {method: 'GET', signal: signal})
		.then(result => {
			switch(opts.encoding) {
				case 'json':
					return result.json().then(json => {
						return json
					})
					break
				default:
					return result.text().then(text => {
						return text
					})
			}
		})
		.catch(() => {
			throw 'Error: Uncaught TimeoutError: Timed out while reading file' // Mimics beaker.hyperdrive.readFile() timeout... not sure if this is good enough though.
		})
}
export default readFile