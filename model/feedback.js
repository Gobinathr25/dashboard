const mongoose=require('mongoose');

var feedbackModel=new mongoose.Schema({
   inputFeedBack:{
      type:String
   },
})

const Feedback=mongoose.model('Feedback',feedbackModel);
module.exports={Feedback};