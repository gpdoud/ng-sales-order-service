import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.class';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  pageTitle: string = "Items List"
  items: Item[];

  constructor(
    private itemsvc: ItemService
  ) { }

  ngOnInit(): void {
    this.itemsvc.list().subscribe(
      res => {
        console.log(res);
        this.items = res as Item[];
      },
      err => {
        console.error(err);
      }
    );
  }


}
