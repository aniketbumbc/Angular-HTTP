import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
@Injectable()
export class HttpService {

  constructor(private  http:Http) { }

  getdata(){
    return this.http.get("https://angular2-practice-62b3a.firebaseio.com/Hello.json")
      .map((respones:Response)=> respones.json());
  }
  senddata(user:any){
    const body=JSON.stringify(user);
    const headers=new Headers;
    headers.append('content-type','application/json');
return this.http.post('https://angular2-practice-62b3a.firebaseio.com/data.json',body)
  .map((data:Response)=>data.json());

  }
  getowndata()
  {
    return this.http.get("https://angular2-practice-62b3a.firebaseio.com/data.json")
      .map((respones:Response)=> respones.json());
  }
}
