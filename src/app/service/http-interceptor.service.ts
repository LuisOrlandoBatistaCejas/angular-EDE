import {Injectable, Injector} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler, HttpHeaderResponse,
  HttpInterceptor, HttpProgressEvent,
  HttpRequest, HttpResponse,
  HttpSentEvent
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';
import {throwError} from 'rxjs/internal/observable/throwError';
import {Router} from '@angular/router';
import {AuthService} from './auth-service/auth.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  inflightAuthRequest = null;

  constructor(private injector: Injector) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | any> {
    const authService = this.injector.get(AuthService);
    const router = this.injector.get(Router);
    const authReq = req.clone({
      headers: req.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
    return next.handle(authReq).pipe(
      catchError(error => {
        // checks if a url is to an admin api or not
        if (error.status === 401) {
          if (localStorage.getItem('remember_me')) {
            if (!this.inflightAuthRequest) {
              this.inflightAuthRequest = authService.refreshToken();

              if (!this.inflightAuthRequest) {
                // remove existing tokens
                localStorage.clear();
                authService.logout();
                return throwError(error);
              }
            }
            return this.inflightAuthRequest.pipe(
              switchMap((newToken: string) => {
                // unset inflight request
                this.inflightAuthRequest = null;

                // clone the original request
                const authReqRepeat = req.clone({
                  headers: req.headers.set('Authorization', 'Bearer ' + newToken )
                });

                // resend the request
                return next.handle(authReqRepeat);
              })
            );
          } else {
            localStorage.removeItem('token');
            router.navigate(['/session/login'], {queryParams: {returnUrl: router.url}});
          }
        } else {
          return throwError(error);
        }

      }));
  }
}
