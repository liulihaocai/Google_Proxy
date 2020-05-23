const http = require('http'); 
const request = require('request');
const url = require('url'); 
const fs = require('fs');
const util = require('util');
var readfi = fs.readFileSync('./config.json','utf8');
var configj=JSON.parse(readfi)
http.createServer(function(req, res) {
var par=url.parse(req.url, true);
if(par.pathname=="/url"){
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
}).listen(configj.port)
console.log("Google proxy server running at localhost:"+configj.port)