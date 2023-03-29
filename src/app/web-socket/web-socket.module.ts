import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule, Routes } from '@angular/router';
import { MatComponentModule } from '../common/common.module';
import { WebSocketComponent } from './web-socket.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const routes: Routes = [
  {
    path : '',
    component : WebSocketComponent
  }
];

@NgModule({
  declarations: [
    WebSocketComponent,
  ],
  imports : [
    CommonModule,
    MatComponentModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSlideToggleModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class WebSocketModule { }
