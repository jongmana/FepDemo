import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { VerzoekenOverzichtComponent } from './verzoeken-overzicht/verzoeken-overzicht.component';
import { VerzoekFormulierComponent } from './verzoek-formulier/verzoek-formulier.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
  { path: 'verzoek_indienen', component: VerzoekFormulierComponent },
  { path: 'verzoeken_overzicht', component: VerzoekenOverzichtComponent },
  { path: '**', component: VerzoekenOverzichtComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    VerzoekenOverzichtComponent,
    VerzoekFormulierComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
