import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private router: Router, public auth: AuthService) { }

    canActivate() {
        return this.checkForAuthentication();
    }
    checkForAuthentication() {
        if (this.auth.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }


    }
    canActivateChild() {
        return this.checkForAuthentication();
    }
}
