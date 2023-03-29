import { Component, OnInit} from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.scss']
})
export class WebSocketComponent implements OnInit{
  inputText: string = '';

  messages : Array<string> = [];

  myWebSocket: WebSocketSubject<any> = webSocket({
    url: 'ws://localhost:443/',
    deserializer: ({ data }) => data
  });

  ngOnInit(){}

  onClick(){ if(this.inputText) this.myWebSocket.next(this.inputText); }

  onToggle(event: any){
    if(event.checked){
      this.myWebSocket.subscribe({
        next: (msg: string) => {
          this.messages.push(msg);
        }, // Called whenever there is a message from the server.
        error: err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
        complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
      });
    } else {
      this.myWebSocket.unsubscribe();
    }
  }

  
}
