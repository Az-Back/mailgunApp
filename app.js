const mailgun = require("mailgun-js");
const DOMAIN = 'sandboxeeee1ad218824b1aa1a1f0161ae11801.mailgun.org';
const api_key = "f9965a6cdfe3708088792e8b5590d3e9-0be3b63b-05eed543";
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
const data = {
	from: 'Excited User <me@samples.mailgun.org>',
	to: 'back.ranged@gmail.com, back.ranged@gmail.com',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});