import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { Challenge1Component } from './challenge1/challenge1.component';
import { CssCommandComponent } from './css-command/css-command.component';
import { WebComponent } from './web/web.component';


const routes: Routes = [
  { path: 'css', component: CssCommandComponent },
  { path: 'web', component: WebComponent },
  { path: 'about', component:  AboutComponent },
  { path: 'challenge', component:  ChallengeComponent },
  { path: 'challenge1', component:  Challenge1Component },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
