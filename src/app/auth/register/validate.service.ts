import {Injectable} from '@angular/core';

@Injectable()
export class ValidateService {

    constructor() {
    }

    validateInfoNotMissing(user): boolean {
        return !(user.email === undefined || user.email === '' || user.password === undefined || user.password === '');
    }

    validateEmail(email: string): boolean {
        const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isEmail = emailRe.test(email);

        return isEmail;
    }

    validatePassword(password: string): boolean {
        const regex = [];

        regex.push('[A-Z]');
        regex.push('[a-z]');
        regex.push('[0-9]');

        let passed = 0;

        for (let i = 0; i < regex.length; i++) {
            if (new RegExp(regex[i]).test(password)) {
                passed++;
            }
        }

        if (password.length >= 5) {
            passed++;
        }

        return passed === 4;
    }
}
