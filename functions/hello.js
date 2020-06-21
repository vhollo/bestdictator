const NetlifyAPI = require('netlify')

exports.handler = async function (event, context, callback) {
	const client = new NetlifyAPI(process.env.ACCESS_TOKEN)
	//console.log('@@client', client)
	const ticket = await client.createTicket({ clientId: 'ed1369d967e1a3dc59458363f07ef9769f4349d66d1df013cd9a51e40f4707e7' })
	console.log('@@ticket', ticket)
	const token = await client.getAccessToken(ticket)
	console.log('@@token', token)
	//await openBrowser(`https://app.netlify.com/authorize?response_type=ticket&ticket=${ticket.id}`)
	/* const accessToken = await client.getAccessToken(ticket)
	console.log('@@accessToken', accessToken) */
/* 	const sites = await client.listSites({ 'client_id': 'ed1369d967e1a3dc59458363f07ef9769f4349d66d1df013cd9a51e40f4707e7' })
	console.log('@@sites', sites) */
	callback(null, {
		statusCode: 200,
		body: "Hello, World"
	});
}