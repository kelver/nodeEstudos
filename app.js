var http = require('http');
var handle = require('./handle');
var server = http.createServer(handle.fn);

console.log(handle);
server.listen(3000, function(){
	console.log('Server is listen at port 3000');
});