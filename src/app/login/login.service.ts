import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../shared/settings/app-settings';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }
  login(username: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'from': username,
        'Authorization': password
      })
    };
    return this.http.post(AppSettings.AUTH_BASE_URL + "login", null, httpOptions);
  }
  logout(payload: any) {
    return this.http.post(AppSettings.AUTH_BASE_URL + "login", payload);
  }
}