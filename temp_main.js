const express=require('express');
const app=express();
//app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./public/views');// to define where 
app.get('/',(req,res)=>{
    res.render('index',{title: 'hiii',message:'hellow'  });
});
app.listen(3000);