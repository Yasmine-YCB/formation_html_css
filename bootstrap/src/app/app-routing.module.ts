import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CssCommandComponent } from './css-command/css-command.component';
import { WebComponent } from './web/web.component';


const routes: Routes = [
  { path: 'css', component: CssCommandComponent },
  { path: 'web', component: WebComponent },
  { path: 'about', component:  AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
