var http = require('http'); 
var request = require('request');
var url = require('url'); 
var fs = require('fs');
var util = require('util');
http.createServer(function(req, res) {
var par=url.parse(req.url, true);
if(par.pathname=="/url"){
	console.log(par.query.q)
res.writeHead(302, {
'Content-Type': 'text/html;charset=UTF-8',
"location":par.query.q
});
res.end()
}else{
	res.writeHead(200)
var mess={url:'http://www.google.com'+par.path}
request(mess, function (error, response, body) {
res.write(body)
res.end()
})}
}).listen(2052)