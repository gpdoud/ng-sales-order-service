import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Customer", "/customers/list"),
    new Menu("Item", "/items/list"),
    new Menu("Order", "/orders/list")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
