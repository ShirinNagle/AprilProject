import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CollectionPage} from './../collection/collection';
import{MorePage} from './../more/more';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToCollection(){
    this.navCtrl.push(CollectionPage);
  }

  goToMore(){
    this.navCtrl.push(MorePage);
  }

}
