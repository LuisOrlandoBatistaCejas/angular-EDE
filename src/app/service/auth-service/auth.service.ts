import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map, share} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AppService} from '../../app.service';
import {HttpService} from '../http.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private returnUrl;

    constructor(private httpService: HttpService,
                private router: Router,
                private appService: AppService,
                private route: ActivatedRoute) {
        this.returnUrl = route.snapshot.queryParams.returnUrl || '/';
    }

    login(data) {
        this.httpService.post('api/auth-jwt/', {username: data.username, password: data.password}).subscribe(result => {
            localStorage.setItem('token', result.token);
            localStorage.setItem('remember_me', data.remember_me);
            this.appService.isLoggedIn = true;
            this.router.navigate([this.returnUrl]);
            this.appService.getPerfil();
        }, error => {
            if (error.error.status === 401) {
            }
        });
    }

    refreshToken(): Observable<string> {
        const body = {
            token: localStorage.getItem('token')
        };
        return this.httpService.post('oauth2/token', body).pipe(
            share(), // <========== YOU HAVE TO SHARE THIS OBSERVABLE TO AVOID MULTIPLE REQUEST BEING SENT SIMULTANEOUSLY
            map(res => {
                console.log(res);
                const token = res.access_token;
                const newRefreshToken = res.refresh_token;

                // store the new tokens
                localStorage.setItem('refresh_token', newRefreshToken);
                localStorage.setItem('access_token', token);
                return token;
            })
        );
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('remember_me');
        this.router.navigate(['/session/login']);
    }

    isAllowedToAccess(route) {
        /*switch (route) {
        }*/
        return true;
    }
}
