import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MatCheckboxModule } from '@angular/material';

@NgModule({
    declarations: [HomePageComponent],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatIconModule
    ],
})
export class HomePageModule {
    
}
