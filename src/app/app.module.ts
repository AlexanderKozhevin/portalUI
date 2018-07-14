import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortalModule } from 'portal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
