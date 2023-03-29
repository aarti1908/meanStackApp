import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, ErrorHandler, Injector} from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  
  constructor(private injector: Injector) { }

  handleError(error: Error | HttpErrorResponse) {
    // const errorService = this.injector.get(ErrorService);
    // const logger = this.injector.get(LoggingService);
    // const notifier = this.injector.get(NotificationService);   
  }
}