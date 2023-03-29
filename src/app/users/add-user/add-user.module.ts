import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user.component';
import { MatComponentModule } from 'src/app/common/common.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../users.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path : '',
    component : AddUserComponent
  }
];

@NgModule({
  declarations: [AddUserComponent],
  imports: [
    CommonModule,
    MatComponentModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[UsersService]
})
export class AddUserModule { }
