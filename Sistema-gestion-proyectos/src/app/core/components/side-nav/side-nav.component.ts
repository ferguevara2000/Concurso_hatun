import { Component, Input, OnInit } from '@angular/core';
import { IMenu, MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @Input() sideNavStatus: boolean = false

  list: IMenu[]

  constructor(private menuService:MenuService) { 
    this.list = this.menuService.getMenu();
   }

  ngOnInit(): void {
  }
}
