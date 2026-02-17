const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.setHeader('Content-Type','text/html')
        res.write('<head>');
         res.write('<head><title>Practice-set</title></head>');
        res.write('<body>');
        res.write('<nav>')
        res.write('<ul>')
        res.write('<button><a href="/home"><li>Home</li></a></button>')
        res.write('<button><a href="/men"><li>Men</li></a></button>')
        res.write('<button><a href="/women"><li>Women</li></a></button>')
        res.write('<button><a href="/kids"><li>Kids</li></a></button>')
        res.write('<button><a href="/cart"><li>Cart</li></a></button>')
        res.write('</ul>')
        res.write('</nav>')
        res.write('</body>');
        res.write('</head>');
        res.end();
    }
     if(req.url == '/home'){
        res.setHeader('Content-Type','text/html')
        res.write('<head>');
         res.write('<head><title>Practice-set</title></head>');
        res.write('<body>');
       res.write('<h1>Home</h1>');
        res.write('</body>');
        res.write('</head>');
        res.end();
    }
    else if(req.url == '/men'){
        res.setHeader('Content-Type','text/html')
        res.write('<head>');
         res.write('<head><title>Practice-set</title></head>');
        res.write('<body>');
       res.write('<h1>Men</h1>');
        res.write('</body>');
        res.write('</head>');
        res.end();
    }
    else if(req.url == '/women'){
        res.setHeader('Content-Type','text/html')
        res.write('<head>');
         res.write('<head><title>Practice-set</title></head>');
        res.write('<body>');
       res.write('<h1>Women</h1>');
        res.write('</body>');
        res.write('</head>');
        res.end();
    }
    else if(req.url == '/kids'){
        res.setHeader('Content-Type','text/html')
        res.write('<head>');
         res.write('<head><title>Practice-set</title></head>');
        res.write('<body>');
       res.write('<h1>Kids</h1>');
        res.write('</body>');
        res.write('</head>');
        res.end();
    }
    else if(req.url == '/cart'){
        res.setHeader('Content-Type','text/html')
        res.write('<head>');
         res.write('<head><title>Practice-set</title></head>');
        res.write('<body>');
       res.write('<h1>Cart</h1>');
        res.write('</body>');
        res.write('</head>');
        res.end();
    }
})

const PORT = 3000;
    server.listen(PORT,()=>{
        console.log(`Server Listening at http://localhost:${PORT}`);
    })