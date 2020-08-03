import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order.class';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer/customer.class';
import { CustomerService } from 'src/app/customer/customer.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  pageTitle: string = "Order Create";
  order: Order = new Order();
  customers: Customer[] = [];

  constructor(
    private router: Router,
    private ordsvc: OrderService,
    private custsvc: CustomerService
  ) { }

  save(): void {
    this.order.customerId = +this.order.customerId;
    this.ordsvc.create(this.order).subscribe(
      res => {
        console.log("Order create successful!");
        this.router.navigateByUrl("/orders/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.custsvc.list().subscribe(
      res => {
        this.customers = res as Customer[];
      },
      err => {
        console.error(err);
      }
    );
  }

}
