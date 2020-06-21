const NetlifyAPI = require('netlify')

exports.handler = async function (event, context, callback) {
	const client = new NetlifyAPI(process.env.ACCESS_TOKEN)
	//console.log('@@event', event)
	//console.log('@@context', context)
	//console.log('env', process.env.ACCESS_TOKEN)
	//console.log('client', client.accessToken)
	//const sites = await client.listSites()
	//console.log(sites)
/*
	async () => res = await client.showTicket()
	async () => res = await client.listSites
 */
/* 
	let res
	async () => res = await client
	console.log('@@@user', res)
	callback(null, {
		headers: {
			"Access-Control-Allow-Origin": "*"
		},
		statusCode: 200,
		body: res
	}); */
};

