import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnimationComponent } from './animation/animation.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { Challenge1Component } from './challenge1/challenge1.component'; 
import { CssCommandComponent } from './css-command/css-command.component';
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
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
