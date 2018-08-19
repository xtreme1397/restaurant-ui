import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
@Injectable()
export class AuthService {
    public getToken(): string {
        return localStorage.getItem('token');
    }
    setToken(token: string): void {
        localStorage.setItem('token', token);
    }
    deleteToken(): void {
        localStorage.removeItem('token');
    }
    public isAuthenticated(): boolean {
        const token = this.getToken();
        return !this.isTokenExpired(token);
    }
    public decodeToken(){
        return decode(this.getToken());
    }
    public getLoggedinUserDetails(){
        const decodedToken= decode(this.getToken());
        return decodedToken;
    }
    
    getTokenExpirationDate(token: string): Date {
        const decoded = decode(token);

        if (decoded.exp === undefined) return null;

        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }

    isTokenExpired(token?: string): boolean {
        if (!token) token = this.getToken();
        if (!token) return true;

        const date = this.getTokenExpirationDate(token);
        if (date === undefined) return false;
        return !(date.valueOf() > new Date().valueOf());
    }
}