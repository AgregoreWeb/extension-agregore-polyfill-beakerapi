// Reference: https://docs.beakerbrowser.com/apis/beaker.hyperdrive#beakerhyperdrivewritefileurl-data-opts
function writeFile(url, data, opts = {encoding: 'utf8', metadata: {}, timeout: 60000}) {
	if(typeof opts === 'string') opts = {encoding: opts, metadata: {}, timeout: 60000}
	const controller = new AbortController()
	const signal = controller.signal
	setTimeout(() => controller.abort(), opts.timeout)

	switch(opts.encoding) {
		case 'json':
			data = JSON.stringify(data)
			break
	}

	return fetch(url, {method: 'PUT', body: data, signal: signal})
		.then(response => {
			if(!response.ok) switch(response.status) {
				case 403:
					throw 'Error: Uncaught ArchiveNotWritableError: Cannot write to this archive ; Not the owner' // Mimics beaker.hyperdrive.writeFile() unauthorised... not sure if this is good enough though.
					break
				default:
					throw reponse.status
			}
		})
}
export default writeFile