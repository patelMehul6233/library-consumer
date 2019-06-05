import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { ProjectComponent } from './project/project.component';
import { ErrorComponent } from './error/error.component';
import { MainGuard } from './main.guard';
import { ConversationModule } from './conversation/conversation.module';
import { ConversationComponent } from './conversation/conversation.component';
import { SharedComponent } from './shared/shared.component';
import { from } from 'rxjs';
const routes: Routes = [
  { path: 'project', component: ProjectComponent, canActivate:[MainGuard],
    loadChildren : './project/project.module#ProjectModule'},
    { path: 'user', component: UserComponent, canActivate:[MainGuard],
    loadChildren : './user/user.module#UserModule'},
  { path: 'conversation', component: ConversationComponent, canActivate:[MainGuard],
    loadChildren: './conversation/conversation.module#ConversationModule', outlet: 'sidebar'
  // , canActivate :[MainGuard],u
  //   children:[
  //     { path: 'signin', component: SigninComponent},
  //     { path: 'signUp', component: SignupComponent},
  //     { path: '', redirectTo: 'signin', pathMatch: 'full' },
  //   ]
  },
  { path: 'shared', component: SharedComponent, canActivate:[MainGuard],
  loadChildren: './shared/shared.module#SharedModule'},
  { path: '', redirectTo: 'project', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
