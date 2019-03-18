import {Component, Optional, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar} from '@angular/material';
import {AppService} from './app.service';

@Component({
    selector: 'gene-app',
    template: '<router-outlet></router-outlet>',
    encapsulation: ViewEncapsulation.None
})
export class GeneAppComponent {
    constructor(translate: TranslateService, private appService: AppService) {
        translate.addLangs(['en', 'fr', 'he', 'ru', 'ar', 'zh', 'de', 'es', 'ja', 'ko', 'it', 'hu']);
        translate.setDefaultLang('en');

        const browserLang: string = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        this.appService.getPerfil();
    }
}
