import { Component, OnInit } from '@angular/core';

import { SharedServiceService } from '../../services/shared-service.service'
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback:String;
  constructor(private addService:SharedServiceService) {
   }

  ngOnInit() {
  }

  onSubmit(){
     var input={
       feedback:this.feedback
     }
     this.addService.addFeedback(input).subscribe(input=>{
       console.log("input",input)
      })
   }
}
