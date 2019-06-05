import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../user/userservice.service';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
  providers:[UserserviceService]
})
export class ConversationComponent implements OnInit {

  constructor(private userServce: UserserviceService) { }

  ngOnInit() {
    const a = this.userServce.isAuthenticated();
    console.log("convefrsation",a)
  }

}
