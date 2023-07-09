import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ControlDirectiveDirective } from './libraries/shared/directives/control-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ControlDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
