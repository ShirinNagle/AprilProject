import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { SavePage } from '../save/save';
/**
 * Generated class for the SavedTitlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saved-titles',
  templateUrl: 'saved-titles.html',
})
export class SavedTitlesPage {

  myTitle: string;
  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams) {
  }

  saveTitle(){
    console.log(this.myTitle);
    this.storage.set("myTitle", this.myTitle);
    //this.navCtrl.pop();
    this.navCtrl.push(SavePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavedTitlesPage');
  }
 ionViewWillEnter(){
   this.storage.get("myTitle")
   .then((data)=>
   {
     this.myTitle = data;
   })
   .catch((err)=>{
     alert("Error accessing Storage")
   })
 }
}
