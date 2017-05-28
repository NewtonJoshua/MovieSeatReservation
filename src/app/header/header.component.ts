import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ToastService]
})
export class HeaderComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private toastService: ToastService) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
  }

  login(authProvider) {
    this.afAuth.auth.signInWithPopup(new firebase.auth[authProvider]()).
      then(res => {
        this.toastService.toast({
          type: 'success',
          title: 'Login',
          msg: 'Hi, You have logged in as ' + res.user.displayName
        });
      }, err => {
        this.toastService.toast({
          type: 'error',
          title: 'Login',
          msg: err
        });
      });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.toastService.toast({
          type: 'warning',
          title: 'Logout',
          msg: 'Hi, You have logged out. Kindly login back'
        });
    });
  }

}
