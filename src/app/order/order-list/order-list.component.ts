import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order.class';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  pageTitle: string = "Orders List"
  orders: Order[];

  constructor(
    private ordsvc: OrderService
  ) { }

  ngOnInit(): void {
    this.ordsvc.list().subscribe(
      res => {
        console.log(res);
        this.orders = res as Order[];
      },
      err => {
        console.error(err);
      }
    );
  }

}
