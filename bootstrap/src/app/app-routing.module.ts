import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnimationComponent } from './animation/animation.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { Challenge1Component } from './challenge1/challenge1.component'; 
import { CssCommandComponent } from './css-command/css-command.component';
import { Desgn2Component } from './desgn2/desgn2.component';
import { Design1Component } from './design1/design1.component';
import { Design2FinalVersionComponent } from './design2-final-version/design2-final-version.component';
import { Design3Component } from './design3/design3.component';
import { GridCssComponent } from './grid-css/grid-css.component';
import { WebComponent } from './web/web.component';


const routes: Routes = [
  { path: 'css', component: CssCommandComponent },
  { path: 'web', component: WebComponent },
  { path: 'about', component:  AboutComponent },
  { path: 'challenge', component:  ChallengeComponent },
  { path: 'challenge1', component:  Challenge1Component },
  { path: 'gridCss', component:  GridCssComponent }, 
  { path: 'animation', component:  AnimationComponent }, 
  { path: 'design1', component:  Design1Component }, 
  { path: 'design2', component:  Desgn2Component }, 
  { path: 'design2Final', component:  Design2FinalVersionComponent }, 
  
  { path: 'design3', component:  Design3Component }, 
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
