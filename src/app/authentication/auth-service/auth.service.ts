import { Injectable } from '@angular/core';
import {HttpService} from '../../service/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map, share} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AppService} from '../../app.service';

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
    this.httpService.post('api/auth-jwt/', {email: data.email, password: data.password}).subscribe(result => {
      localStorage.setItem('token', result.token);
      localStorage.setItem('remember_me', data.remember_me);
      this.appService.isLoggedIn = true;
      this.router.navigate([this.returnUrl]);
    }, error => {
      if (error.error.status === 401) {
      }
    });
  }

  refreshToken(): Observable<string> {
    const body = {
      grant_type: 'refresh_token',
      client_id: 'G-AppFront',
      client_secret: '52f880e3480840e1b65b36e0e242abb1',
      refresh_token: localStorage.getItem('refresh_token')
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
    localStorage.removeItem('user');
    localStorage.removeItem('remember');
    this.router.navigate(['/login']);
  }

  isAllowedToAccess(route) {
    /*switch (route) {
    }*/
    return true;
  }
}