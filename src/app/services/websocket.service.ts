import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
const subject = webSocket('wss://socketsbay.com/wss/v2/1/demo/');

@Injectable({
    providedIn: 'root'
})
export class WebSocketService{


    constructor(){
        subject.subscribe();
        subject.next({ message: 'some message' });
        subject.complete();
    }


}