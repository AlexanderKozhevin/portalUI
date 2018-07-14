import { NgModule } from '@angular/core';
import { PortalComponent } from './portal.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [PortalComponent, SvgIconComponent],
  exports: [PortalComponent, SvgIconComponent]
})
export class PortalModule { }
