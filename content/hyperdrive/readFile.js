// Reference: https://docs.beakerbrowser.com/apis/beaker.hyperdrive#beakerhyperdrivereadfileurl-opts
function readFile(url, opts = {encoding: 'utf8', timeout: 60000}) {
	if(typeof opts === 'string') opts = {encoding: opts, timeout: 60000}
	return fetch(url, {method: 'GET'})
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
}
export default readFile