import { Injectable } from '@angular/core';

export interface IMenu{
  number: string,
  name: string,
  icon: string,
  url: string
}
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private list: IMenu[] = [
    {
      number: '1',
      name: 'Usuarios',
      icon: 'bi bi-person-fill-gear',
      url: '/usuarios'
    },
    {
      number: '2',
      name: 'Configuracion',
      icon: 'bi bi-gear-wide',
      url: '/configuracion'
    }
  ]

  constructor() { }

  getMenu(): IMenu[] {
    return [...this.list]
  }

  getmenuByUrl(url: string): IMenu{
    return this.list.find(menu => menu.url.toLowerCase() === url.toLowerCase()) as IMenu
  }
}