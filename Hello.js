/*
var http = require('http');
var url  = require('url');


http.createServer(function(req,res)
{
	res.writeHead(200,{'Content-Type': 'text/html'});
    var q = url.parse(req.url,true).query;
    var dates = q.year + " <--> " + q.mounth;
    res.write('<h1>'+dates+'</h1>');
	//res.end('Hello World! Hi World');
	res.end();
}).listen(8080);
*/

var http = require('http');
var fs  = require('fs');
var url  = require('url');

http.createServer(function(req,res)
{
	var q =url.parse(req.url,true);
	console.log(q.pathname);
	var filename = "." + q.pathname;

	if (filename == './')  { filename = "./index"; }

	filename = filename + ".html";

	//console.log("--> "+filename+" <--");

	fs.readFile(filename,function(err,data)
	{
      if (err)
      {
      	res.writeHead(404,{'Content-Type': 'text/html'});
      	return res.end("--- 404 Not Found ---");
      }
 	  res.writeHead(200,{'Content-Type': 'text/html'});
 	  res.write(data);
 	  //console.log("...Incoming Request: " + req.url);
	  return res.end();
	})
}).listen(8080);

console.log("Server Lintening on Port 8080...");
