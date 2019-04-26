import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {MorePage} from '../more/more';
import {CollectionPage} from '../collection/collection';
import {SavedTitlesPage} from '../saved-titles/saved-titles';
import{Storage} from '@ionic/storage';

/**
 * Generated class for the SavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-save',
  templateUrl: 'save.html',
})
export class SavePage {
   
  inputtext:string;
  key:string = "paintingTitle";

  myTitle: string;
    
  constructor(public navCtrl: NavController, private storage:Storage, public navParams: NavParams) {

  }

  saveTitle(){
   
    this.storage.set("inputtext", this.inputtext);
    console.log("save data");//checking this function is working
  }
  showTitle(){
    console.log("show data");
    this.storage.get(this.key).then((val)=>
    {
      this.key = val;
      val = this.inputtext;
      alert(val);
      console.log("Your title is", val);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavePage');
  }

  
  goToSavedTitlesPage(){
    this.navCtrl.push(SavedTitlesPage);
  }

  ionViewWillEnter(){
    this.storage.get("inputtext").then((data)=>
    {
      this.inputtext = data;
    })
    .catch ((err) =>{
      alert("Error acessing Storage")
    })
  }

 
  goHome(){
    this.navCtrl.push(HomePage);
  }

  goToCollection(){
    this.navCtrl.push(CollectionPage);
  }

  goToMore(){
    this.navCtrl.push(MorePage);
  }
 
  
  

}
