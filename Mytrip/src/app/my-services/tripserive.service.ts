import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripseriveService {

  constructor(private http: HttpClient) { }
  // LOGINJSON:LOGINCOMPONANT
  loginpage() {
    let loginpath = "assets/APIJson/login.json"
    return this.http.get(loginpath)

  };


}
