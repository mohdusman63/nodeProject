
//data.js dissplay.ejs
var express=require('express');
var empModal=require('./data');
var app=express();
var bodyparser=require('body-parser')
app.set('view engine','ejs');
app.set('views','./public/views');

app.use(bodyparser.urlencoded({ extended: true }));
var employ=empModal.find({})
app.get('/',(req,res,next)=>{
    employ.exec(function(err,data){
      
   if(err) throw err;
   
   res.render('dissplay',{records:data})
})
})

app.listen(3000);
