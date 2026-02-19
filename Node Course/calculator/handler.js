const {sumRequestHandler} = require('./sum')

const requestHandler = (req,res) =>{
console.log(req.url,req.method);
if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write(`<html>
    <head><title>Practice Set</title></head>
    <body><h1>Welcome to calculator</h1>
    <a href="/calculator">Go To Calculator</a>
    </body>
    </html>
    `);
    return res.end();
}else if(req.url === '/calculator'){
     res.setHeader('Content-Type','text/html');
    res.write(`<html>
    <head><title>Practice Set</title></head>
    <body>
    <form action="/calculate-result" method="POST">
    <input type="text" name="first" placeholder="First Number"><br>
    <input type="text" name="second" placeholder="Second Number"><br>
    <input type="submit" value="Sum" />
    </form>
    </body>
    </html>
    `);
    return res.end();
}else if (req.url === '/calculate-result' && req.method === 'POST'){
    return sumRequestHandler(req,res)
}

res.setHeader('Content-Type','text/html');
    res.write(`<html>
    <head><title>Practice Set</title></head>
    <body><h1>404 Page Does Not Exists</h1>
    <a href="/">Go To Home</a>
    </body>
    </html>
    `);
    return res.end();
}

exports.requestHandler = requestHandler;