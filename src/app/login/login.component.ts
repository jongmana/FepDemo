import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private firebaseAuth: AngularFireAuth,
    private authenticationService: AuthenticationService) { }

  login() {
    this.firebaseAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  ngOnInit() {
  }

}
