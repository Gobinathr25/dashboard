const mongoose=require('mongoose');

var feedbackModel=new mongoose.Schema({
   question:{
      type:String
   },
   answer:{
      type:String
   }
})

const Feedback=mongoose.model('Feedback',feedbackModel);
module.exports={Feedback};