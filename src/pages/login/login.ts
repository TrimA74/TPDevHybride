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
  private isConnected: boolean;

  constructor(public navController : NavController, public navParams: NavParams, public restProvider : RestProvider) {

    this.restProvider.getData().then((data) => {
     this. users = data;
     this.isConnected = false;
    });



  }

  doConnection(username, password) {
    console.log('1');
    this.users.forEach((user) => {
      console.log(password);
      if(user.name == username && user.password == password)
      {
        this.isConnected = true;
        this.navController.setRoot(ListPage);
      }


    });

  }
}
