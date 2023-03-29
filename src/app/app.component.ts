import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHeaderVisible: boolean = false;
  title = 'meanStackApp';

  constructor(private router: Router){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        // event is an instance of NavigationEnd, get url!  
        const url = event.urlAfterRedirects;
        this.isHeaderVisible = (url == '/login') ? false : true;
      }
    })
    
  }
}
