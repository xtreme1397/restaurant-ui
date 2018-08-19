import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../shared/settings/app-settings';

@Injectable()
export class OrdersService {
    constructor(private http: HttpClient) { }
    addOrder(payload: any) {
        payload.password = btoa(payload.password);
        return this.http.post(AppSettings.STUDIO_BASE_URL + "orders", payload);
    }

    getOrder() {
        return this.http.get(AppSettings.STUDIO_BASE_URL + "orders");
    }

}