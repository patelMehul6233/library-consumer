import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MehullibtsModule } from 'mehullibts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserComponent } from './user/user.component';
import { ProjectComponent } from './project/project.component';
import { ErrorComponent } from './error/error.component';
import { UserserviceService } from './user/userservice.service';
import { UserModule } from './user/user.module';
import { ConversationComponent } from './conversation/conversation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import{ InterceptorService } from './interceptor.service';
import { HighlightedtectDirective } from './highlightedtect.directive';
import { SharedComponent } from './shared/shared.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ErrorComponent,
    ProjectComponent,
    ConversationComponent,
    HighlightedtectDirective,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MehullibtsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("app module run");
  }
 }
