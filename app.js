const express=require('express');
const path = require('path');
const app=express();
const PORT=3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    res.send("home page");
})

app.get('/about', (req, res)=>{
    res.send("about page");
})

app.get('/weather', (req, res)=>{
    res.send("weather page");
})

app.get('*', (req, res)=>{
    res.send("404 error page");
})

app.listen(PORT, ()=>{
    console.log("server started at http://localhost:"+PORT);
})