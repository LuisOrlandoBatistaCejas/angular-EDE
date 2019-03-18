import {filter} from 'rxjs/operators';
import {Component, OnInit, OnDestroy, ViewChild, HostListener, ViewEncapsulation} from '@angular/core';
import {MenuItems} from '../core/menu/menu-items/menu-items';
import {BreadcrumbService} from 'ng5-breadcrumb';
import {PageTitleService} from '../core/page-title/page-title.service';
import {TranslateService} from '@ngx-translate/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {DeviceDetectorService} from 'ngx-device-detector';
import PerfectScrollbar from 'perfect-scrollbar';
import {AuthService} from '../service/auth-service/auth.service';
import {CoreService} from '../service/core/core.service';

const screenfull = require('screenfull');

@Component({
    selector: 'gene-layout',
    templateUrl: './main-material.html',
    styleUrls: ['./main-material.scss'],
    encapsulation: ViewEncapsulation.None
})

export class MainComponent implements OnInit, OnDestroy {

    root: any = 'ltr';
    layout: any = 'ltr';
    currentLang: any = 'en';
    customizerIn = false;
    showSettings = false;
    chatpanelOpen = false;
    sidenavOpen = true;
    isMobile = false;
    isFullscreen = false;
    header: string;
    url: string;
    dark: boolean;
    boxed: boolean;
    collapseSidebar: boolean;
    compactSidebar: boolean;
    isMobileStatus: boolean;
    sidenavMode = 'side';
    popupDeleteResponse: any;
    sidebarColor: any;
    isSidebarFilterClass: string;
    isHeaderFilterClass: string;
    deviceInfo = null;
    private _mediaSubscription: Subscription;
    private _routerEventsSubscription: Subscription;
    private _router: Subscription;
    @ViewChild('sidenav') sidenav;

    sideBarFilterClass: any = [
        {
            sideBarSelect: 'sidebar-color-1',
            colorSelect: 'sidebar-color-dark'
        },
        {
            sideBarSelect: 'sidebar-color-2',
            colorSelect: 'sidebar-color-primary',
        },
        {
            sideBarSelect: 'sidebar-color-3',
            colorSelect: 'sidebar-color-accent'
        },
        {
            sideBarSelect: 'sidebar-color-4',
            colorSelect: 'sidebar-color-warn'
        },
        {
            sideBarSelect: 'sidebar-color-5',
            colorSelect: 'sidebar-color-green'
        }
    ];

    headerFilterClass: any = [
        {
            headerSelect: 'header-color-1',
            colorSelect: 'header-color-dark'
        },
        {
            headerSelect: 'header-color-2',
            colorSelect: 'header-color-primary'
        },
        {
            headerSelect: 'header-color-3',
            colorSelect: 'header-color-accent'
        },
        {
            headerSelect: 'header-color-4',
            colorSelect: 'header-color-warning'
        },
        {
            headerSelect: 'header-color-5',
            colorSelect: 'header-color-green'
        }
    ];

    constructor(public menuItems: MenuItems,
                private breadcrumbService: BreadcrumbService,
                private pageTitleService: PageTitleService,
                public translate: TranslateService,
                private router: Router,
                private media: MediaObserver,
                private deviceService: DeviceDetectorService,
                private authService: AuthService,
                public coreService: CoreService, private routes: Router,
                private activatedRoute: ActivatedRoute) {

        const browserLang: string = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

        breadcrumbService.addFriendlyNameForRoute('/dashboard', 'Dashboard');
        // Administracion Breadcrumbs
        breadcrumbService.addFriendlyNameForRoute('/administracion', 'Administración');
        breadcrumbService.addFriendlyNameForRoute('/administracion/usuarios', 'Usuarios');
        breadcrumbService.addFriendlyNameForRoute('/administracion/personas', 'Personas');
        breadcrumbService.addFriendlyNameForRoute('/administracion/usuarios-deta', 'Usuarios Deta');
        // Configuracion Breadcrumbs
        breadcrumbService.addFriendlyNameForRoute('/configuracion', 'Configuración');
        breadcrumbService.addFriendlyNameForRoute('/configuracion/vehiculos', 'Vehículos');
        breadcrumbService.addFriendlyNameForRoute('/configuracion/tipos-identificacion', 'Tipos de Identificación');
        breadcrumbService.addFriendlyNameForRoute('/configuracion/empresas', 'Empresas');
        breadcrumbService.addFriendlyNameForRoute('/configuracion/productos', 'Productos');
        breadcrumbService.addFriendlyNameForRoute('/configuracion/formas-de-pago', 'Formas de Pago');
        breadcrumbService.addFriendlyNameForRoute('/configuracion/tipos-de-documentos', 'Tipos de Documentos');
        breadcrumbService.addFriendlyNameForRoute('/configuracion/formas-de-cancelacion', 'Formas de Cancelación');
    }

    ngOnInit() {
        this.pageTitleService.title.subscribe((val: string) => {
            this.header = val;
        });

        setTimeout(() => {
            if (window.innerWidth > 1280) {
                this.coreService.sidenavMode = 'side';
                this.coreService.sidenavOpen = true;
            }
        }, 10)

        this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
            this.url = event.url;
        });

        if (this.url !== '/session/login' && this.url !== '/session/register' && this.url !== '/session/forgot-password'
            && this.url !== '/session/lockscreen') {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar-container ')
        }

        this.deviceInfo = this.deviceService.getDeviceInfo();
        if (this.deviceInfo.device === 'ipad' || this.deviceInfo.device === 'iphone' || this.deviceInfo.device === 'android') {
            this.coreService.sidenavMode = 'over';
            this.coreService.sidenavOpen = false;
        }

        this._mediaSubscription = this.media.media$.subscribe((change: MediaChange) => {
            if (this.coreService.horizontalStatus) {
                if (window.innerWidth <= 959) {
                    this.coreService.horizontalSizeStatue = false;
                } else {
                    this.coreService.horizontalSizeStatue = true;
                }
            }
            this.isMobileStatus = (change.mqAlias === 'xs') || (change.mqAlias === 'sm') || (change.mqAlias === 'md');
            this.isMobile = this.isMobileStatus;
            if (this.isMobile && window.innerWidth < 1920) {
                this.coreService.sidenavMode = 'over';
                this.coreService.sidenavOpen = false;
            } else {
                this.coreService.sidenavMode = 'side';
                this.coreService.sidenavOpen = true;
            }
        });

        this._routerEventsSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd && this.isMobile) {
                this.sidenav.close();
            }
        });
    }

    ngOnDestroy() {
        this._router.unsubscribe();
        this._mediaSubscription.unsubscribe();
    }


    /**
     *As router outlet will emit an activate event any time a new component is being instantiated.
     */
    onActivate(e, scrollContainer) {
        scrollContainer.scrollTop = 0;
        if (window.innerWidth > 1280) {
            this.coreService.sidenavMode = 'side';
            this.coreService.sidenavOpen = true;
        }
    }

    /**
     * toggleFullscreen method is used to show a template in fullscreen.
     */
    toggleFullscreen() {
        if (screenfull.enabled) {
            screenfull.toggle();
            this.isFullscreen = !this.isFullscreen;
        }
    }

    /**
     * customizerFunction is used to open and close the customizer.
     */
    customizerFunction() {
        this.customizerIn = !this.customizerIn;
    }

    /**
     * addClassOnBody method is used to add a add or remove class on body.
     */
    addClassOnBody(event) {
        const body = document.body;
        if (event.checked) {
            body.classList.add('dark-theme-active');
        } else {
            body.classList.remove('dark-theme-active');
        }
    }

    /**
     * addMenuItem is used to add a new menu into menu list.
     */
    addMenuItem(): void {
        this.menuItems.add({
            state: 'pages',
            name: 'GENE MENU',
            type: 'sub',
            icon: 'trending_flat',
            children: [
                {state: 'blank', name: 'SUB MENU1'},
                {state: 'blank', name: 'SUB MENU2'}
            ]
        });
    }

    /**
     * changeRTL method is used to change the layout of template.
     */
    changeRTL(isChecked) {
        if (isChecked) {
            this.layout = 'rtl'
        } else {
            this.layout = 'ltr'
        }
    }

    /**
     * toggleSidebar method is used a toggle a side nav bar.
     */
    toggleSidebar() {
        this.coreService.sidenavOpen = !this.coreService.sidenavOpen;
    }

    /**
     * logOut method is used to log out the  template.
     */
    logOut() {
        this.authService.logout();
    }
    /**
     * sidebarFilter function filter the color for header section.
     */
    sidebarFilter(selectedFilter) {
        document.getElementById('main-app').classList.remove('sidebar-color-dark');
        this.isSidebarFilterClass = selectedFilter.colorSelect;
        document.querySelector('.radius-circle').classList.remove('radius-circle');
        document.getElementById(selectedFilter.sideBarSelect).classList.add('radius-circle');
    }

    /**
     * sidebarFilter function filter the color for header section.
     */
    headerFilter(selectedFilter) {
        document.getElementById('main-app').classList.remove('header-color-dark');
        this.isHeaderFilterClass = selectedFilter.colorSelect;
        document.querySelector('.radius-active').classList.remove('radius-active');
        document.getElementById(selectedFilter.headerSelect).classList.add('radius-active');
    }
    /**
     * changeLayout method is used to change the vertical layout to horizontal layout.
     */
    changeLayout() {
        this.coreService.horizontalStatus = true;
        if (window.innerWidth <= 959) {
            this.coreService.horizontalSizeStatue = false;
        } else {
            this.coreService.horizontalSizeStatue = true;
        }
    }
}


