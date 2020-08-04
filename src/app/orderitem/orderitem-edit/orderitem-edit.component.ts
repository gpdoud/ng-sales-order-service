import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderitemService } from '../orderitem.service';
import { Orderitem } from '../orderitem.class';
import { ItemService } from '../../item/item.service'
import { Item } from 'src/app/item/item.class';

@Component({
  selector: 'app-orderitem-edit',
  templateUrl: './orderitem-edit.component.html',
  styleUrls: ['./orderitem-edit.component.css']
})
export class OrderitemEditComponent implements OnInit {

  pageTitle: string = "Orderitem Edit";
  orderitem: Orderitem = null;
  items: Item[] = null;

  constructor(
    private orditemsvc: OrderitemService,
    private itemsvc: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.orditemsvc.change(this.orderitem).subscribe(
      res => {
        console.log("Orderitem change successful");
        this.router.navigateByUrl(`/orders/lines/${this.orderitem.orderId}`);
      },
      err => {
        console.error(err);
      }
    );
  }
  ngOnInit(): void {
    this.itemsvc.list().subscribe(
      res => this.items = res as Item[],
      err => console.error(err)
    );
    let id = this.route.snapshot.params.id;
    this.orditemsvc.get(+id).subscribe(
      res => this.orderitem = res as Orderitem,
      err => console.error(err)
    );
  }

}
