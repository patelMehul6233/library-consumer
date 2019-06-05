import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { UserserviceService } from '../user/userservice.service';
export interface message{
  name:String,
  Time:String
}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [UserserviceService],
})
export class ProjectComponent implements OnInit {
  public result:String = "";
  public diskre:any;
  public nObj:any= {};
  public sixStep:any = [1,2,3,4,5,6];
  public Acheck:any = [1,2,3,4];
  public resultArray:any= [];
  public SelectionofCssProperties:any = [{ name:'animation' },{ name:'transition' }];
  public message:message;
  private abc:any=[{
    name:'mehul',value:22
  },{
    name:'mehul',value:33
  },{
    name:'aks',value:52
  }]
  public ui:any = [{name:'mehul'},{name:'akshay'},{name:'hemant'},{name:'chetan'}] ;
 @Input() sendChild:any;
 @Output() sendParent = new EventEmitter();
 public sampleobj:any = {
    name:'mehul',temp:22
  }
  akshay:String = "123456789";  
  constructor(private userservice: UserserviceService) { }

  ngOnInit() {
    const abcd = this.userservice.isAuthenticated();
    console.log('abcdabcd',abcd)
  }

  sendPArentData(value){
    this.sendParent.emit(value);
  }
  sendtoParent(name,time){
    debugger;
    this.message = {name:name,Time:time};
  }
  viewchildex(){
    return 11;
  }
  pageRef(data){
  //radio button process
  //   const unq:any = document.querySelector('.nepolian')
  //   if(unq){
  //     gunq.classList.remove('nepolian')
  //     this.result = "";
  //   }
  //    data.classList.add('nepolian')
  //    this.result = data.children[0].innerHTML;
  // }

  //checkbox process
  if(data.className == 'ik nepolian'){
    data.classList.remove('nepolian')
    const uniqindex = this.resultArray.indexOf(data.children[0].innerHTML)
    this.resultArray.splice(uniqindex,1)
  }else{
   data.classList.add('nepolian')
   const tempData = data.children[0].innerHTML;
   this.resultArray.push(tempData)
  }
}

checkPlayer(data){

const selected = document.querySelector(".selected-color");
if(selected){
  selected.classList.remove('selected-color')
  this.result = "";
}
data.classList.add('selected-color')
this.result = data.innerHTML;
}
startGame(player){
const rPlayer = document.getElementsByClassName('red-player');
const yPlayer = document.getElementsByClassName('yellow-player');
const gPlayer = document.getElementsByClassName('green-player');
const bPlayer = document.getElementsByClassName('blue-player');

if(player == 2){

}

}

clickPlay(){
  const diceroller = Math.floor( Math.random() * 6 ) + 1;
  let h:any = document.getElementById('h');
  h.innerHTML = diceroller;
  this.diskre = diceroller;
}
}
