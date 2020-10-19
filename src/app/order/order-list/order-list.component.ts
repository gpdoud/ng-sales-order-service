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
  
  sortCriteria: string = "description";
  sortAsc: boolean = true;

  sort(column: string): void {
    if(column === this.sortCriteria) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortAsc = true;
    this.sortCriteria = column;
  }

  constructor(
    private ordsvc: OrderService
  ) { }

  ngOnInit(): void {
    this.ordsvc.list().subscribe(
      res => {
        for(let o of res) {
          o.customerName = o.customer.name;
        }
        console.log(res);
        this.orders = res as Order[];
      },
      err => {
        console.error(err);
      }
    );
  }

}
