import {Injectable} from '@angular/core';

export interface ChildrenItems {
    state: string;
    name: string;
    type?: string;
}

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    children?: ChildrenItems[];
}

const MENUITEMS = [
    {
        state: 'dashboard',
        name: 'DASHBOARD',
        type: 'link',
        icon: 'explore',
    },
    {
        name: 'ADMINISTRACION',
        icon: 'security',
        type: 'sub',
        state: 'administracion',
        children: [
            {
                name: 'USUARIOS',
                state: 'usuarios'
            },
            {
                name: 'PERSONAS',
                state: 'personas'
            },
            {
                name: 'USUARIOS DETA',
                state: 'usuarios-deta'
            }
        ]
    },
    {
        name: 'COMPROBANTES',
        icon: 'receipt',
        state: 'comprobantes',
        type: 'link'
    },
    {
        name: 'CONFIGURACION',
        icon: 'settings',
        type: 'sub',
        state: 'configuracion',
        children: [
            {
                name: 'TIPO DE IDENTIFICACION',
                state: 'tipos-identificacion'
            },
            {
                name: 'EMPRESAS',
                state: 'empresas'
            },
            {
                name: 'PRODUCTOS',
                state: 'productos'
            },
            {
                name: 'VEHICULOS',
                state: 'vehiculos'
            },
            {
                name: 'FORMAS DE PAGO',
                state: 'formas-de-pago'
            },
            {
                name: 'TIPOS DE DOCUMENTOS',
                state: 'tipos-de-documentos'
            },
            {
                name: 'FORMAS DE CANCELACION',
                state: 'formas-de-cancelacion'
            },
        ]
    }
];

@Injectable()
export class MenuItems {
    getAll(): Menu[] {
        return MENUITEMS;
    }

    add(menu: any) {
        MENUITEMS.push(menu);
    }
}
