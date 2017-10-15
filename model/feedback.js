const mongoose=require('mongoose');

var feedbackModel=mongoose.Schema({
   question:{
      type:string
   },
   answer:{
      type:string
   }
})

const Feedback=mongoose.model('Feedback',FeedbackModel);
module.exports={Feedback};