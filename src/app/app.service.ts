import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public isLoggedIn = false;
  constructor() { }
}
