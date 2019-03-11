import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth-service/auth.service';
import {HttpService} from '../../service/http.service';
import {Observable} from 'rxjs';
import {map, share} from 'rxjs/operators';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {
  }
  onSubmit(loginData) {
    this.authService.login(loginData);
  }

}
