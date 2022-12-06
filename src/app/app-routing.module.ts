import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
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
    component: ExternalBaseComponent,
    children: [{path: '', loadChildren: () => AuthRoutingModule}]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
