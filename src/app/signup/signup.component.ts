import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(private router: Router, private signupService: SignupService) { }

    ngOnInit() { }
    onSignup(form: NgForm) {
        interface SignupResponse {
            username: string;
            namr: string;
        };
        this.signupService.signup(form.value).subscribe((response: SignupResponse) => {
            this.router.navigate(["login"]);
        }, (err) => {
            console.log(err);
        })
    }
}
