const express=require('express');
const mongoose= require('mongoose');
const config=require('./config/database');
var app= express();

mongoose.connect(config.database);

mongoose.connection.on('connected',()=>{
   console.log('Connected....')
})


app.use(express.static(__dirname+'./client/src'));

app.get('/',(req,res)=>{
   res.send("hello")
});

app.get('/feedback',(req,res)=>{
   var questions=req.query.question;
   var answer=req.query.answer;
   
})

app.listen(3000,()=>{
   console.log('Server started...')
})
