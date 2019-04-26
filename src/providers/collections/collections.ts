import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

/*
  Generated class for the CollectionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CollectionsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CollectionsProvider Provider');
  }

  getPicInfo():Observable<any>{
    return this.http.get('https://www.rijksmuseum.nl/api/nl/collection?key=Nbk5ZEfF&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614')
  }

}
/*search(query):Observable<any>{
  return this.http.get("https://www.rijksmuseum.nl/api/nl/collection?q=Q&key=fpGQTuED&format=json".replace("Q", query))

}*/