const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/snf', {useUnifiedTopology: true});

var conn=mongoose.connection;
var employeeSchema = new mongoose.Schema({
    name: String,
    email:String,
    etype:String,
    hourlyrate:Number,
    totalhours:Number,
  });
  //calce throw method
  employeeSchema.methods.income=function(){
      console.log('income throw method is '+this.hourlyrate*this.totalhours)
  }
  var employeeModal=mongoose.model('employee1',employeeSchema);
  var employee=new employeeModal({name:'aman',email:'mohdusman@gmail.com',
  etype:'permanet',hourlyrate:11,totalhours:12})
//  console.log('income '+employee.hourlyrate*employee.totalhours);
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