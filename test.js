const express=require("express");
const app=express();
app.use(express.static('image_handle'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index1.html')
})
app.post('/users',(req,res)=>{
    res.send('welcome 2');
})

app.listen(3000);