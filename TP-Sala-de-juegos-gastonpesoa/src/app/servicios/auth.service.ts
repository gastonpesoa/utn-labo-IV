import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private AFauth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore) {
  }

  getCurrentUser() {
    let user = this.AFauth.auth.currentUser;
    return user;
  }

  login(email: string, password: string) {

    return new Promise((resolve, reject) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password)
        .then(user => {
          resolve(user);
        })
        .catch(err => {
          reject(err);
        });
    })
  }

  logout() {
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }

  register(name: string, email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res.user.uid);
          const uid = res.user.uid;
          this.db.collection("usuarios").doc(res.user.uid).set({
            nombre: name,
            uid: uid,
            perfil: 'usuario'
          })
          resolve(res)
        })
        .catch(error => { reject(error) });
    });
  }
}
