
var http = require('http');
var fs = require('fs');
// Program to display page according to the URL.. routing.. This is a very lengthy process. We cannot be writing loops
// for every page that needs to be displayed.
http.createServer(function(request,response) {
    if (request.url === '/') {
        response.writeHead(200, {'content-type': 'text/plain'})
        response.write('Hey there!!\n');
        response.end('How is it going');
    }
    else if (request.url === '/signin') {
        response.writeHead(200, {'content-type': 'text/html'});
        fs.createReadStream('./signin.htm').pipe(response);
    }
    else if (request.url === '/json') {
        response.writeHead(200, {'content-type': 'application/JSON'});
        var Person = function (fName, lName) {
            this.fName = fName;
            this.lName = lName;
            this.fullName = function () {
                return `The fullname is ${this.fName} ${this.lName}`
            }
        }
        var per1 = new Person('Abirami', 'Gopinath');
        response.write(`${JSON.stringify(per1)} \n`);
        response.end(per1.fullName());
    }
    else {
        response.writeHead(404);
        response.end();
    }
}).listen(8080);
