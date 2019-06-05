import { Injectable } from '@angular/core';
import { UserModule } from './user.module';
import { ProjectModule } from '../project/project.module';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  isAuthenticated(){
    return true;
  }
  deinedIn(){
    return "anywherree";
  }
  
}
