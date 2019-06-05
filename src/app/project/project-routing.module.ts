import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectlistComponent } from '../project/projectlist/projectlist.component';
const routes: Routes = [
{path:'ProjectlistComponent', component:ProjectlistComponent},
{ path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,FormsModule]
})
export class ProjectRoutingModule { }
   