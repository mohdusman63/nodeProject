// form1.ejs is render file
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views','./public/views');
app.get('/',(req,res)=>{
    res.render('form1');

})
app.post('/form_element',(req,res)=>{
    const username=req.body.username;
    const email=req.body.email;
    //console.log(username)
    res.send(`<h1>username is ${username}<br> password is ${email}</h1>`)
    res.end();
    
})
app.listen(3000);

