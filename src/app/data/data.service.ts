import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUserSettings } from './user-setting';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) {}

  getSubscriptionTypes(): Observable<string[]> {
      return of(['Monthly','Annual','Lifetime']);
  }


  postUserSettingsForm(userSettings: IUserSettings): Observable<any>{
    return this.http.post('https://putsreq.com/RUZFRBdS4h2RB0m3vc52',userSettings);
    
    
    // return of(userSettings);
  }
}
