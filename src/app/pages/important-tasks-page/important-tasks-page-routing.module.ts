import { ImportantTasksPageComponent } from './important-tasks-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {path:'',component:ImportantTasksPageComponent,data:{shouldReuse:true,key:'important-tasks'}},  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportantTasksPageRoutingModule { }
