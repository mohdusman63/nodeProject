const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/form', { useNewUrlParser: true});
var conn=mongoose.connection;
var detailsSchema=mongoose.Schema({
    name:String,
    password:String,
    email:String
})
var form_modal=new mongoose.model('form_details',detailsSchema)
module.exports=form_modal;