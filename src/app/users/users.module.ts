import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { MatComponentModule } from '../common/common.module';
import {MatButtonModule} from '@angular/material/button';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    MatComponentModule,
    MatButtonModule,
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
