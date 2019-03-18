import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../../service/auth-service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    constructor(private router: Router, private route: ActivatedRoute,
                private authService: AuthService) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.isLoggedIn()) {
            const route = window.location.pathname.split('/')[1];
            if (this.authService.isAllowedToAccess(route)) {
                return true;
            } else {
                this.router.navigate(['/403']);
                return false;
            }
        } else {
            this.router.navigate(['/session/login'], {queryParams: {returnUrl: state.url}});
            return false;
        }

    }

    /**
     * Checks if user is logged in
     */
    isLoggedIn() {
        if (localStorage.getItem('token') !== null) {
            return true;
        } else {
            return false;
        }
    }
}
