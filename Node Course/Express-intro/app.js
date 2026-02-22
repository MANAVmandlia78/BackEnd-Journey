const express = require('express');
const userRequestHandler = require('./user');

const app = express();

app.use("/",(req,res,next)=>{
console.log("Came in first middleware",req.url,req.method);
//res.send("<p>Came from First Middleware</p>")
next();
});

app.post("/submit-details",(req,res,next)=>{
console.log("Came in Second middleware",req.url,req.method);
res.send("<h1>Welcome to Manav's Web App</h1>")
})

app.use("/",(req,res,next)=>{
console.log("Came in another middleware",req.url,req.method);
res.send("<p>Came from another Middleware</p>")
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});