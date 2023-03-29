import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatComponentModule } from '../common/common.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports : [
    CommonModule,
    MatComponentModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [LoginService]
})
export class LoginModule { }
