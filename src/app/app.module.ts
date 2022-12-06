import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternalBaseComponent } from './internal-base/internal-base.component';
import { ExternalBaseComponent } from './external-base/external-base.component';

@NgModule({
  declarations: [
    AppComponent,
    InternalBaseComponent,
    ExternalBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
