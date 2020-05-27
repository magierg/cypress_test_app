import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MatCheckboxModule } from '@angular/material';
import { ImportantTasksPageRoutingModule } from './important-tasks-page-routing.module';
import { ImportantTasksPageComponent } from './important-tasks-page.component';

@NgModule({
  declarations: [ImportantTasksPageComponent],
  imports: [
    CommonModule,
    ImportantTasksPageRoutingModule,
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
export class ImportantTasksPageModule { }
