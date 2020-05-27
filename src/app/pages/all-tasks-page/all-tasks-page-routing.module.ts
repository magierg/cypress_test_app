import { AllTasksPageComponent } from './all-tasks-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {path:'',component:AllTasksPageComponent,data:{shouldReuse:true,key:'all-tasks'}},  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllTasksPageRoutingModule { }
