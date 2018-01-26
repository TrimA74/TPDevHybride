import {Component, ViewChild} from '@angular/core';


import { RestProvider } from '../../providers/rest/rest';
import { Nav } from 'ionic-angular';

import { ListPage } from '../list/list';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  @ViewChild(Nav) nav: Nav;

  private users:any;

  constructor(public RestProvider : RestProvider) {

    this.RestProvider.getData().then((data) => {
     this. users = data;
    });



  }

  doConnection(username, password) {
    console.log('1');
    this.users.forEach((user) => {
      console.log(user);
      if(user.name == username && user.pasword == password)
      {
        console.log('wtf');
        this.nav.setRoot(ListPage);
      }


    });

  }
}
