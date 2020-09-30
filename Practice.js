const express=require('express')
const bodyParser=require('body-parser')
const { body, validationResult } = require('express-validator');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs')
app.set('views','./public/views');
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.render('UForm')
    
})
app.post('/',[
    body('username','enter vaild fsormat email id').isEmail(),
    
    body('password','enter 5 length password').isLength({ min: 5 })

],(req,res)=>{
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
      console.log(errors.mapped())
      res.render('UForm',{error:errors.mapped()})
  }
 else{
     
    res.render('GetData',{username:req.body.username,password:req.body.password})}
})
app.listen(3000)