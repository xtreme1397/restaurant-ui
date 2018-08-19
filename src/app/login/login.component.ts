import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService } from '../shared/services/auth.service';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, public auth: AuthService, public loginService: LoginService) {
    }

    ngOnInit() { }

    onLoggedin(form: NgForm) {
        interface LoginResponse {
            accessToken: string;
            accessExpiration: number;
        };
        this.loginService.login(form.value.username, btoa(form.value.password)).subscribe((data: LoginResponse) => {
            this.auth.setToken(data.accessToken);
            this.router.navigate(["dashboard"]);
        }, (error) => {
            console.log(error);
        });
    }
}
