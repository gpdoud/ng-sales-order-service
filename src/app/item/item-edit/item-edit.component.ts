import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item.class';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  pageTitle: string = "Item Edit";
  item: Item = null;

  constructor(
    private itemsvc: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.itemsvc.change(this.item).subscribe(
      res => {
        console.log("Item change successful");
        this.router.navigateByUrl("/items/list");
      },
      err => {
        console.error(err);
      }
    );
  }
  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.itemsvc.get(+id).subscribe(
      res => this.item = res as Item,
      err => console.error(err)
    );
  }

}
