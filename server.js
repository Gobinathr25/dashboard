const express=require('express');
const mongoose= require('mongoose');
const _=require('lodash')
const bodyParser=require('body-parser');
const path=require('path');
const cors = require('cors');

const config=require('./config/database');
const {Feedback}=require('./model/feedback');
mongoose.Promise = global.Promise;
var app= express();

mongoose.connect(config.database);

mongoose.connection.on('connected',()=>{
   console.log('Connected....')
})


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'client')))

app.use(cors());
app.get('/',(req,res)=>{
   res.send("Hello");
})
app.post('/feedback',(req,res)=>{ 
   console.log(req.body)
   var body=_.pick(req.body,['inputFeedBack'])
   console.log(body);
   var feedBack=new Feedback(body);
   feedBack.save().then((err,res)=>{
      if(err){
         console.log('Error',err)
      }
      else{
         console.log("Saved Successfully...")
         res.json(feedback);
      }
   })

})

app.listen(4000,()=>{
   console.log('Server started...')
})
