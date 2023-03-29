import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MatComponentModule } from '../common/common.module';

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
    MatComponentModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
