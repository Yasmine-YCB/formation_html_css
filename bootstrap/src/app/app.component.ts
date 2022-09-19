import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootstrap';
  constructor(private router:Router)
  {}
  web(){
this.router.navigateByUrl("/web")
  }
  css(){
    this.router.navigateByUrl("/css")

  }
}
