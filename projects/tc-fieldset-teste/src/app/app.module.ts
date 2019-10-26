import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TcFieldsetModule } from 'projects/tc-fieldset/src/lib/tc-fieldset.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TcFieldsetModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
