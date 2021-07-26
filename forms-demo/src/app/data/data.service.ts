import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from "rxjs"
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // This function calls the Http service 
  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any> {
    // "of" function from rxjs - not super clear on what this does
    // return of(userSettings);

    // below URL generated from PutsReq website
    return this.http.post('https://putsreq.com/CzWDeiVooJev62SCMb7P', userSettings)
  }
}
