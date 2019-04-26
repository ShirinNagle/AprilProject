import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from'@angular/common/http';
import{IonicStorageModule} from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CollectionPage} from '../pages/collection/collection';
import {SavePage} from '../pages/save/save';
import { CollectionsProvider } from '../providers/collections/collections';
import {SavedTitlesPage} from '../pages/saved-titles/saved-titles';
import { CalendarProvider } from '../providers/calendar/calendar';
import{MorePage} from '../pages/more/more';
import {InAppBrowser} from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CollectionPage,
    SavePage,
    SavedTitlesPage,
    MorePage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CollectionPage,
    SavePage,
    SavedTitlesPage,
    MorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CollectionsProvider,
    CalendarProvider,
    InAppBrowser
    
  ]
})
export class AppModule {}
