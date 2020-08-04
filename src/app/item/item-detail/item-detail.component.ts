import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item = null;
  pageTitle: string = "Item Detail";
  showDelete: boolean = false;

  verify(): void { this.showDelete = !this.showDelete; }
  delete(): void {
    this.itemsvc.remove(this.item.id).subscribe(
      res => {
        console.log("Delete Item successful");
        this.router.navigateByUrl("/items/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemsvc: ItemService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.itemsvc.get(+id).subscribe(
      res => {
        console.log("Item", res);
        this.item = res as Item;
      },
      err => {
        console.error(err);
      }
    );
  }


}
