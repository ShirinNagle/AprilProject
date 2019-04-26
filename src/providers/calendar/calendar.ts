import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

/*
  Generated class for the CalendarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CalendarProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CalendarProvider Provider');
  }

  getDatesInfo():Observable<any>{
    return this.http.get('https://www.rijksmuseum.nl/api/nl/agenda/2018-05-31?key=Nbk5ZEfF&format=json')
  }
}
