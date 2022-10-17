import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CssCommandComponent } from './css-command/css-command.component';
import { WebComponent } from './web/web.component';
import { AboutComponent } from './about/about.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { Challenge1Component } from './challenge1/challenge1.component'; 
import { GridCssComponent } from './grid-css/grid-css.component';
import { Challenge3Component } from './challenge3/challenge3.component';
import { AnimationComponent } from './animation/animation.component';
import { Design1Component } from './design1/design1.component';

@NgModule({
  declarations: [
    AppComponent,
    CssCommandComponent,
    WebComponent,
    AboutComponent,
    ChallengeComponent,
    Challenge1Component, 
    GridCssComponent, Challenge3Component, AnimationComponent, Design1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
