import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssCommandComponent } from './css-command/css-command.component';


const routes: Routes = [
  { path: 'css', component: CssCommandComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
