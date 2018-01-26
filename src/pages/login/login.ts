import {Component, ViewChild} from '@angular/core';


import { RestProvider } from '../../providers/rest/rest';
import { NavController, NavParams } from 'ionic-angular';

import { ListPage } from '../list/list';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {


  private users:any;
  private notGood:any;

  constructor(public navController : NavController, public navParams: NavParams, public RestProvider : RestProvider) {

    this.RestProvider.getData().then((data) => {
     this. users = data;
    });

    this.notGood = false;

  }

  doConnection(username, password) {
    this.users.forEach((user) => {
      console.log(password);
      if(user.name == username && user.password == password)
      {
        console.log('wtf');
        this.notGood;
        this.navController.setRoot(ListPage);
      }


    });
    this.notGood = true;

  }
}
