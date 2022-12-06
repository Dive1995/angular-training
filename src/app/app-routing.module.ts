import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalBaseComponent } from './external-base/external-base.component';
import { InternalBaseComponent } from './internal-base/internal-base.component';
import { RegistrationRoutingModule } from './registration/registration-routing.module';

const routes: Routes = [
  {
    path: '',
    component: InternalBaseComponent,
    children: [{ path: 'reg', loadChildren: () => RegistrationRoutingModule }],
  },
  {
    path: 'auth',
    component: ExternalBaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
