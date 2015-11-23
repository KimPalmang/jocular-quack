var http = require('http'),
    httpProxy = require('http-proxy');

    httpProxy.createProxyServer({
      target: 'http://localhost:7000/build',
      host: 'localhost',
      port: '7000',
      secure: true,
      fallback: 'index.html'
    }).listen(9000);

    http.createServer(function(req, res){
      res.writeHead(200, {'Access-Control-Allow-Origin':'*'});
      res.write('Request successfully proxied!' + JSON.stringify(req.headers, true, 2));
      res.end();
    }).listen(7000);
