
//how to get form details params throw browser details .ejs display details
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views','./public/views');

app.get('/',(req,res)=>{
  res.render('postreq1',{message:'welcome'});  
})
app.post('/',(req,res)=>{
    res.render('details.ejs',{title:'hii',username:req.body.username,email:req.body.email})
})

app.get('/about/:a-:b',(req,res)=>{
    res.render('about',{title:'welcome',sum:req.params.a+req.params.b})
})
app.listen(3000);