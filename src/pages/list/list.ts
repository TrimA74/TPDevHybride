import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';


import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  private users:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public restProvider: RestProvider) {

    this.restProvider.getData().then((data) => {
      this.users = data;
    });

  }



  itemTapped(event, item) {
    console.log(item);
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
