import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MatCheckboxModule } from '@angular/material';
import { AllTasksPageRoutingModule } from './all-tasks-page-routing.module';
import { AllTasksPageComponent } from './all-tasks-page.component';

@NgModule({
  declarations: [AllTasksPageComponent],
  imports: [
    CommonModule,
    AllTasksPageRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class AllTasksPageModule { }
