import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dbUsersRef: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore,private authService: AuthService) { 
    this.dbUsersRef = this.db.collection("usuarios");
  }

  getUserByUid(uid: string){
    return this.dbUsersRef.doc(uid).valueChanges();
  }

}
