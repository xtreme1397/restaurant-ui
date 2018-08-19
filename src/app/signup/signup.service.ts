import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../shared/settings/app-settings';

@Injectable()
export class SignupService {
  constructor(private http: HttpClient) { }
  signup(payload:any) {
      payload.password=btoa(payload.password);
    return this.http.post(AppSettings.AUTH_BASE_URL + "signup", payload);
  }

}