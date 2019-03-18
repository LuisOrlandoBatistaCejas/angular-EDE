import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ToastrModule} from 'ngx-toastr';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {LockScreenComponent} from './lockscreen/lockscreen.component';

import {SessionRoutes} from './session.routing';
import {MaterialModule} from '../custom-modules/material.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthService} from '../service/auth-service/auth.service';
import {HttpInterceptorService} from '../service/http-interceptor.service';
import {HttpService} from '../service/http.service';


@NgModule({
    declarations: [
        LoginComponent,
        ForgotPasswordComponent,
        LockScreenComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        TranslateModule,
        ReactiveFormsModule,
        RouterModule.forChild(SessionRoutes),
        ToastrModule.forRoot(),
        SlickCarouselModule,
        FlexLayoutModule
    ],
    providers: [
        HttpService,
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService,
            multi: true
        },
    ]
})
export class SessionModule {
}
