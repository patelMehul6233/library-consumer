import { Component,ViewEncapsulation,ViewChild, OnInit } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  constructor (private http: HttpClient){}
  public color:String ;
  public dd:any;
  title = 'library-consumer';
  @ViewChild(ProjectComponent) project:ProjectComponent;
  ngOnInit(){
    debugger;
    this.http.get('http://13.126.120.240:8080/api/user-details')
      .subscribe(data =>{

      })
    }

    // const httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'});
    // const options = {
    //   headers: httpHeaders,
    //   withCredentials: true
    // };
    // this.http.get('http://localhost:3000/api/user-details',options)
    //   .subscribe(
    //     data => console.log(data),
    //     err => console.log(err)
    //   );
  

  

  clickmehul(name,time){
  let a:number = this.project.viewchildex();
  console.log("anywat",a)
  //this.project.sendtoParent(name,time)
  }
}
