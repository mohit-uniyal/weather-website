const express=require('express');
const path = require('path');
const app=express();
const hbs=require('hbs');
const PORT=process.env.PORT || 3000;

const templatePath=path.join(__dirname, 'template/views');
const partialsPath=path.join(__dirname, 'template/partials');

app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(path.join(__dirname, 'public')));

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