// Reference: https://docs.beakerbrowser.com/apis/beaker.hyperdrive#beakerhyperdrivequeryquery
function query(opts = {}) {
	if(typeof opts === 'string') opts = {path: opts}
	opts = {
		...opts,
		path: '',
		drive: origin
	}
	let regex = new RegExp(opts.path.replace('.', '\.').replace('*', '.*'))
	return fetch(origin, {method: 'GET', headers: {'X-Resolve': 'none', 'Accept': 'application/json'}})
		.then(response => response.json())
		.then(json => json.filter(item => regex.test(item)))
}
export default query