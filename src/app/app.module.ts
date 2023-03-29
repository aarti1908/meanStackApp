import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteConfirmationComponent } from './Dialogs/delete-confirmation/delete-confirmation.component';
import { HeaderComponent } from './common/header/header.component';
import { MatComponentModule } from './common/common.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './services/interceptor.service';
import { GlobalErrorHandler } from './services/error_handler.service';
import { AuthGuard } from './gaurd/auth.gaurd';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeleteConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatComponentModule,
  ],
  exports : [],
  providers: [
    AuthGuard,
    {provide: GlobalErrorHandler, useClass: GlobalErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi:true }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
