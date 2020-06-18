const http = require('http'); 
const request = require('request');
const url = require('url'); 
const fs = require('fs');
const util = require('util');
function chkurl(url){
	if(url.substring(0,4)!="http"){return +url}
	else{return url}
}
http.createServer(function(req, res) {
var par=url.parse(req.url, true);
console.log(par)
res.writeHead(200)
var mess={url:par.path.substring(1,par.path.length)}
request(mess, function (error, response, body) {
	if(!error){
res.write(body)}
res.end()
})
}).listen(81)