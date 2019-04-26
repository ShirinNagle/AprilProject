import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{CalendarProvider} from '../../providers/calendar/calendar';
import { HomePage } from '../home/home';

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  calendar: any=[];
  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendarProvider: CalendarProvider) {
  }

  goToHome(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
    this.calendarProvider.getDatesInfo().subscribe((data)=>
    {
      this.calendar = data.options;
    console.log(data.options);
    });
  }

}
