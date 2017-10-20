const express=require('express');
const mongoose= require('mongoose');
const _=require('lodash')
const bodyParser=require('body-parser');

const config=require('./config/database');
const {Feedback}=require('./model/feedback');
mongoose.Promise = global.Promise;
var app= express();

mongoose.connect(config.database);

mongoose.connection.on('connected',()=>{
   console.log('Connected....')
})

app.use(bodyParser.json());
app.use(express.static(__dirname+'./client/src'));

app.get('/',(req,res)=>{
   console.log(req.query);
   res.send("hello")
});

app.post('/feedback',(req,res)=>{ 
   var body=_.pick(req.body,['question','answer'])
   console.log(body);
   var feedBack=new Feedback(body);
   feedBack.save().then((err,res)=>{
      if(err){
         console.log('Error',err)
      }
      else{
         console.log("Saved Successfully...")
      }
   })

})

app.listen(4000,()=>{
   console.log('Server started...')
})
