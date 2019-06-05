import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectModule } from '../project/project.module';
import { SharedRoutingModule } from './shared-routing.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ProjectModule
  ]
})
export class SharedModule { }
