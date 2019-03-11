import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
              private appService: AppService) { }

  ngOnInit() {
    localStorage.removeItem('token');
    localStorage.removeItem('remember_me');
    this.router.navigate(['login']);
    this.appService.isLoggedIn = false;
  }

}
