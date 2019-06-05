import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { UserserviceService } from '../user/userservice.service';

@NgModule({
  declarations: [ProjectlistComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  providers: []
})
export class ProjectModule {
  constructor(){
    console.log("loading project module")
  }
 }
