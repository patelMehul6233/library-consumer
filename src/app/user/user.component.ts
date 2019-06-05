import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../user/userservice.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserserviceService]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
