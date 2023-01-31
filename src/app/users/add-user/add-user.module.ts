import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user.component';
import { CommonComponentModule } from 'src/app/common/common.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
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
    CommonComponentModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[UsersService]
})
export class AddUserModule { }
