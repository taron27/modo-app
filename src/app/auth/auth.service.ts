import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl = '';

  async login(user): Promise<firebase.auth.UserCredential> {
    try {
      this.isLoggedIn = true;
      const newUser = await firebase.auth().signInWithEmailAndPassword(user.email, user.password);

      if (newUser.user) {
        this.isLoggedIn = true;
        window.localStorage.setItem('isLoggedIn', 'true');
        debugger
      }

      window.localStorage.setItem('user-info', JSON.stringify(newUser));
      return newUser;
    } catch (e) {
      throw e;
    }
  }

  async register(user): Promise<firebase.auth.UserCredential> {
    try {
      const newUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);

      if (newUser.user) {
        this.isLoggedIn = true;
        window.localStorage.setItem('isLoggedIn', 'true');
        debugger
      }

      return newUser;
    } catch (e) {
      console.log(e.message);
      return e;
    }
  }

  async sendEmailVerification(): Promise<void> {
    const user = firebase.auth().currentUser;

    try {
      return await user.sendEmailVerification();
    } catch (e) {
      throw e;
    }
  }

  async forgotPass(email: string): Promise<void> {
    try {
      return await firebase.auth().sendPasswordResetEmail(email);
    } catch (e) {
      throw e;
    }
  }

  logout(): void {
    window.localStorage.setItem('isLoggedIn', 'false');
    this.isLoggedIn = false;
  }
}
