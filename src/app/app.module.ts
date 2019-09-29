import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VerzoekenOverzichtComponent } from './verzoeken-overzicht/verzoeken-overzicht.component';
import { VerzoekFormulierComponent } from './verzoek-formulier/verzoek-formulier.component';

@NgModule({
  declarations: [
    AppComponent,
    VerzoekenOverzichtComponent,
    VerzoekFormulierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
