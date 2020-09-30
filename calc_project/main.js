const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('calc_project'));
app.get('/calculate',(req,res)=>{
res.sendFile(__dirname+'/index2.html');

})
app.post('/calculate',(req,res)=>{
  //  res.send('<h1>post method of calculate</h1>')
   // console.log(req.body);
    let no1=req.body.v1;
    let no2=req.body.v2;
    let sum=parseInt(no1)+parseInt(no2);
    res.send('sum is= '+sum);
})
app.listen(3000);