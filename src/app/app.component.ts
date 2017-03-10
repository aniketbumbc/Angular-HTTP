import {Component, OnInit} from '@angular/core';
import {HttpService} from "./http.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items:any[]=[];
  asyncthing=this.httpservice.getdata();
  constructor(private httpservice: HttpService) {
  }

  ngOnInit() {

    //this.httpservice.getdata()
    //.subscribe(
    //(data:any)=>console.log(data)
    //);
  }

  onclick(username: string, number: number, branch: string) {
    this.httpservice.senddata({username: username, number: number, branch: branch})
      .subscribe(
        data => console.log(data)
      );
  }
  ongetdata(){
    this.httpservice.getowndata()
      .subscribe(
     data=>{
       const  myarray=[];
       for(let key in data){

    myarray.push(data[key]);
       }
       this.items=myarray;
     }

      );

  }

}
