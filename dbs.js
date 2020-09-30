const express=require('express')
const app=express();
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Employee', {useUnifiedTopology: true});
var conn=mongoose.connection;
var employeeSchema = new mongoose.Schema({
    name: String,
    email:String,
    etype:String,
    hourlyrate:Number,
    totalhours:Number,
  });
  var employeeModal=mongoose.model('details',employeeSchema);
  var employee=new employeeModal({name:'aman',email:'mohdusman@gmail.com',
  etype:'permanet',hourlyrate:11,totalhours:12})

  conn.on("connected",()=>{
      console.log('connected')
  })
  conn.on("disconnected",()=>{
      console.log('disconnect')
  })
conn.on('error',console.error.bind(console,'connection erorr'))
conn.once('open',function(){
employee.save(function(err,res){
    if (err) throw err;
    conn.close();
})
})
app.listen(3000)