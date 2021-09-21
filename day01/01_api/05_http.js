const fs = require('fs');
const http = require('http')
http.createServer((request, response) => {
    // console.log('a request' ,getPrototypeChain(request));
    // console.log('a response' ,getPrototypeChain(response));
    // response.end('Hi Node');
    // 语义化
    // Best or nothing

    // response = 'hahaha';
    // response.body = 'heiheihei';


    const { url , method, headers } = request;
    if (url === '/' && method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            if(err) {
                response.writeHead(500, {
                    'Content-Type': 'text/plan;charset=utf-8'
                });
                // 中文
                response.end('500 服务器挂了')
                return;
            }
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            response.end(data);
        })
    } else if (url === '/users' && method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ 'name': 'tom' }))
    } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
        // 所有的图片
        // stream 流 url
        fs.createReadStream('.' + url).pipe(response)
    }
    else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/plan;charset=utf-8');
        response.end('404 没有这个')
    }

}).listen(3000, () => {
    console.log('Server at 3000')
});


// Java

function getPrototypeChain(obj) {
    const protoChain = [];
    while(obj = Object.getPrototypeOf(obj)) {
        protoChain.push(obj)
    }
    return protoChain
}


