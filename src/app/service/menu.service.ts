import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public sideMenu = [
    {
      title: 'Inicio',
      icon: 'dashboard',
      link: '/inicio'
    },
    {
      title: 'Administración',
      icon: 'security',
      sub: [
        {
          title: 'Usuarios',
          icon: 'person',
          link: 'usuarios'
        },
        {
          title: 'Personas',
          icon: 'person',
          link: 'personas'
        },
        {
          title: 'Usuarios Deta',
          icon: 'person',
          link: 'usuarios-deta'
        }
      ]
    },
    {
      title: 'Comprobantes',
      icon: 'receipt',
      link: 'comprobantes'
    },
    {
      title: 'Configuración',
      icon: 'settings',
      sub: [
        {
          title: 'Tipo de Identificación',
          icon: 'assignment_ind',
          link: '/identification-types'
        },
        {
          title: 'Empresas',
          icon: 'work',
          link: '/empresas'
        },
        {
          title: 'Productos',
          icon: 'local_parking',
          link: '/items'
        },
        {
          title: 'Vehículos',
          icon: 'directions_car',
          link: '/vehiculos'
        },
        {
          title: 'Formas de Pago',
          icon: 'attach_money',
          link: '/forma-de-pagos'
        },
        {
          title: 'Documentos',
          icon: 'library_books',
          link: '/documentos'
        },
        {
          title: 'Formas Cancelación',
          icon: 'cancel_presentetion',
          link: '/formas-cancelacion'
        },
      ]
    }

  ];
  constructor() { }

}
