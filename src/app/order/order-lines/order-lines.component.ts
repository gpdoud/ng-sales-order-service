import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order.class';
import { ActivatedRoute } from '@angular/router';
import { OrderitemService } from 'src/app/orderitem/orderitem.service';

@Component({
  selector: 'app-order-lines',
  templateUrl: './order-lines.component.html',
  styleUrls: ['./order-lines.component.css']
})
export class OrderLinesComponent implements OnInit {

  orderId: number = 0; 
  pageTitle: string = "Order Lines";
  order: Order = null;
 
  
  showVerify: boolean = false;

  delete(): void { this.showVerify = !this.showVerify; }
  verify(id: number): void {
    this.showVerify = false;
    this.orditemsvc.remove(id).subscribe(
      res => {
        console.log("Orderitem deleted successfully!");
        this.refresh(this.orderId);
      }
    )
  }
  
  constructor(
    private route: ActivatedRoute,
    private ordsvc: OrderService,
    private orditemsvc: OrderitemService
  ) { }

  refresh(id: number): void {
    this.ordsvc.get(id).subscribe(
      res => {
        console.log("Order", res);
        this.order = res as Order;
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.orderId = +this.route.snapshot.params.id;
    this.refresh(this.orderId);
  }

}
