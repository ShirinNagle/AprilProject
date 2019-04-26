import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SavePage} from '../save/save';
import {CollectionsProvider} from '../../providers/collections/collections';
import{InAppBrowser} from '@ionic-native/in-app-browser';
//import{Injectable} from '@angular/core';

/**
 * Generated class for the CollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html',
})
export class CollectionPage {
  collections:any=[];
  name: string;

  constructor(public navCtrl: NavController, private collectionProvider: CollectionsProvider, private iab:InAppBrowser, public navParams: NavParams) {
  //private iab:InAppBrowser, 
  //if plug in was working the above iab:InAppBrowser would be injected to the constructor
  }

  view(url:string){
    this.iab.create(url);
  }
  
  //the above method would bring the user of the app to a more detailed view of the paintings from collection.ts
  goToSave(){
    this.navCtrl.push(SavePage);
  }
  
  /*ionViewDidLoad(){
    this.collectionProvider.search().subscribe((data)=>
     {
      this.collections = data.artObjects;
     console.log(data.artObjects);
     });
}*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionPage');
    this.collectionProvider.getPicInfo().subscribe((data)=>
    {
      this.collections = data.artObjects;
    console.log(data.artObjects);
    });
  }


}
