import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import 'rxjs/add/operator/map';
@Injectable()
export class SharedServiceService {

  constructor(private http:Http) { }

  addFeedback(inputFeedBack){
    console.log("123",inputFeedBack)
    var headers=new Headers();
    headers.append('Content-Type','application/JSON');
    return this.http.post("localhost:4000/feedback",JSON.stringify(inputFeedBack))
    .map(res=>res.json())
  }
}
