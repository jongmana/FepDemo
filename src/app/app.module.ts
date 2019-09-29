import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { VerzoekenOverzichtComponent } from './verzoeken-overzicht/verzoeken-overzicht.component';
import { VerzoekFormulierComponent } from './verzoek-formulier/verzoek-formulier.component';
import { MenuComponent } from './menu/menu.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './core/services/authguard.service';

const appRoutes: Routes = [
  { path: 'verzoek_indienen', component: VerzoekFormulierComponent, canActivate: [AuthguardService] },
  { path: 'verzoeken_overzicht', component: VerzoekenOverzichtComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    VerzoekenOverzichtComponent,
    VerzoekFormulierComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
