const express=require('express');
const path = require('path');
const app=express();
const PORT=3000;

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) =>{
    res.render("index");
})

app.get('/about', (req, res)=>{
    res.render("about");
})

app.get('/weather', (req, res)=>{
    res.render("weather");
})

app.get('*', (req, res)=>{
    res.send("404 error page");
})

app.listen(PORT, ()=>{
    console.log("server started at http://localhost:"+PORT);
})