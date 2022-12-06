import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalBaseComponent } from './internal-base/internal-base.component';

const routes: Routes = [
  { path: "home", component: InternalBaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
