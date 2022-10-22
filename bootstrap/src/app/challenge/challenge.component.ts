import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {

 
  constructor(private router:Router)
  {}

  ngOnInit(): void {
  }
  web(){
this.router.navigateByUrl("/web")
  }
  css(){
    this.router.navigateByUrl("/css")

  }
  design(numb: number){
if(numb == 1){ this.router.navigateByUrl('/design1')}
if(numb == 2){ this.router.navigateByUrl('/design2')}
if(numb == 3){ this.router.navigateByUrl('/design3')}

  }
}
