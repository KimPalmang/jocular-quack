//I DO NOT USE THIS Currently - 2015-11-17!
var http = require('http'),
    httpProxy = require('http-proxy');

    httpProxy.createProxyServer({
      target: 'http://localhost',
      host: 'localhost',
      port: '9000',
      //secure: true,
      fallback: 'index.html',
    }).listen(9000);

    var server = http.createServer(function(req, res){
      res.writeHead(200, {'Access-Control-Allow-Origin':'*'});
      res.write('Request successfully proxied!' + JSON.stringify(req.headers, true, 2) + ' url' + req.url);
      res.end();
    });
    server.listen(7000, function(){
      console.log('Success');
    });
