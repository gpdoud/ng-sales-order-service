import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  pageTitle: string = "Item Create";
  item: Item = new Item();

  constructor(
    private router: Router,
    private itemsvc: ItemService
  ) { }

  save(): void {
    this.itemsvc.create(this.item).subscribe(
      res => {
        console.log("Item create successful!");
        this.router.navigateByUrl("/items/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
  }


}
