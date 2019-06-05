import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationRoutingModule } from './conversation-routing.module';
import { UserserviceService } from '../user/userservice.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConversationRoutingModule
  ],
  providers:[]
})
export class ConversationModule { }
