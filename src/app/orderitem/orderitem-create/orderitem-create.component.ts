import { Component, OnInit } from '@angular/core';
import { OrderitemService } from '../orderitem.service';
import { Orderitem } from '../orderitem.class';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/item/item.class';
import { ItemService } from 'src/app/item/item.service';

@Component({
  selector: 'app-orderitem-create',
  templateUrl: './orderitem-create.component.html',
  styleUrls: ['./orderitem-create.component.css']
})
export class OrderitemCreateComponent implements OnInit {

  orderId: number = 0;
  pageTitle: string = "Orderitem Create";
  orderitem: Orderitem = new Orderitem();
  items: Item[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orditemsvc: OrderitemService,
    private itemsvc: ItemService
  ) { }

  save(): void {
    this.orderitem.orderId = +this.orderId;
    this.orderitem.itemId = +this.orderitem.itemId;
    this.orditemsvc.create(this.orderitem).subscribe(
      res => {
        console.log("Orderitem create successful!");
        this.router.navigateByUrl(`/orders/lines/${this.orderId}`);
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params.ordid;
    this.itemsvc.list().subscribe(
      res => this.items = res as Item[],
      err => console.error(err)
    );
  }

}
