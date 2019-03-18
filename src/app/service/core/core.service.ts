import {Injectable} from '@angular/core';
import {MatDialogRef, MatDialog} from '@angular/material';
import 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Injectable({
    providedIn: 'root'
})

export class CoreService {

    sidenavOpen = true;
    sidenavMode = 'side';
    horizontalStatus = false;
    horizontalSizeStatue = false;

    constructor(private matDialog: MatDialog,
                private http: HttpClient) {
    }
}

