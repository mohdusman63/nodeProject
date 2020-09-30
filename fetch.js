const express=require('express')
const EmModel=require('./data')     // model of db 
const bodyParser=require('body-parser');
const mongoose=require('mongoose')


const app=express()
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views','./public/views');
var getData=EmModel.find({});
app.get('/',(req,res,next)=>{
      getData.exec((err,data)=>{
          if( err) throw error
          console.log(data)
        res.render('table',{record:data})

      })
  
})
app.post('/',(req,res)=>{
    var insertData=new EmModel({
        name:req.body.username,
        password:req.body.password,
        email:req.body.email
     
    })

    console.log(insertData)
    insertData.save((err,res1)=>{
          if(err) throw error
        getData.exec((err,data)=>{
            if( err) throw error
            console.log(data)
          res.render('table',{record:data})
  

    })
})
})
app.get('/delete/:id',(req,res)=>{
    var getId=req.params.id;
    var del=EmModel.findByIdAndDelete(getId)
    del.exec((err)=>{
        if(err) throw error
        res.redirect('/')
    })
  
})
app.get('/edit/:id',(req,res)=>{
    var editId=req.params.id;
    var edit=EmModel.findById(editId)
    edit.exec((err,data)=>{
        if(err) throw error
        console.log('edit'+data)
        res.render('edit',{record:data})
    })

})
app.get('/update',(req,res)=>{
    var update=EmModel.findByIdAndUpdate(req.body.id,{
        name:req.body.username,
        password:req.body.password,
        email:req.body.email

    })
    console.log('update' +update)
    update.exec((err,data)=>{
        console.log('updatedata'+data)
        if(err) throw error
        res.redirect('/')
    })

})
app.listen(3000)

