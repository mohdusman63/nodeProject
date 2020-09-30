const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/form', { useNewUrlParser: true});
var conn=mongoose.connection;
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views','./public/views');
var conn=mongoose.connection;
var detailsSchema=mongoose.Schema({
    name:String,
    password:String,
    email:String
})
var form_modal=new mongoose.model('form_details',detailsSchema)
app.get('/',(req,res)=>{
    res.render('signup1')
})

app.post('/res',(req,res)=>{
   var details=new form_modal({
       name:req.body.username,
       password:req.body.password,
       email:req.body.email,

   })
   console.log(details)
    details.save(function(err,docs){
        if(err) throw err;
        else res.send('<h1>form data sucessfully submited</h1>')
    })
   
})
app.listen(3000);
