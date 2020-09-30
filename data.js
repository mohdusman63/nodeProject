const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/form', {useUnifiedTopology: true});
var conn=mongoose.connection;
var employeeSchema=new mongoose.Schema({
    name: String,
    email:String,
    password:String

})
var employeeModel=new mongoose.model('form_details',employeeSchema);
module.exports=employeeModel;








