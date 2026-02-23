const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log("First Dummy MiddleWare",req.path,req.method);
    next();
});

app.use((req,res,next) => {
    console.log("Second Dummy MiddleWare",req.path,req.method);
    next();
});

// app.use((req,res,next) => {
//     console.log("Third MiddleWare",req.path,req.method);
//     res.send("<h1>Welcome to My World</h1>");
//     next();
// });

// app.get("/",(req,res,next) => {
//     console.log("Third MiddleWare",req.path,req.method);
//     res.send("<h1>Welcome to My World</h1>");
//     next();
// })

app.get("/",(req,res,next) => {
    console.log("Handeling / for GET",req.url,req.method);
    res.send(`<h1>Welcome to My World</h1>`);
    next();
})

app.get("/contact-us",(req,res,next) => {
    console.log("Handeling /contact-us for GET",req.url,req.method);
    res.send(
        `<h1>Please Give your details here</h1>
        <form action="/contact-us" method="POST">
        <input type="text" name="name" placeholder="Enter your Name"/>
        <input type="email" name="email" placeholder="Enter your Email"/>
        <input type="Submit" value="Submit"></input>
        </form>
        `);
})

app.post("/contact-us",(req,res,next) => {
    console.log("Handeling /contact-us for POST",req.url,req.method);
    res.send(
        `<h1>We will contact you shortly</h1>
        `);
})

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server running on address http://localhost:${PORT}`)
})