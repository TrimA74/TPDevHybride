import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';




@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  private selectedUser:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedUser = this.navParams.get('item');
    console.log(this.selectedUser);
  }


}
