import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { CommonComponentModule } from '../common/common.module';
import {MatButtonModule} from '@angular/material/button';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonComponentModule,
    MatButtonModule,
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
