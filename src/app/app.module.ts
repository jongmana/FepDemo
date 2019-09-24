import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerzoekenOverzichtComponent } from './verzoeken-overzicht/verzoeken-overzicht.component';

@NgModule({
  declarations: [
    AppComponent,
    VerzoekenOverzichtComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
