import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CommonComponentModule } from '../common/common.module';
import {MatGridListModule} from '@angular/material/grid-list';

const routes: Routes = [
  {
    path : '',
    component : DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CommonComponentModule,
    MatGridListModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
