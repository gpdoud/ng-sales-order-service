import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';
import { Order } from '../order.class';
import { CustomerService } from '../../customer/customer.service';
import { Customer } from '../../customer/customer.class';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  pageTitle: string = "Order Edit";
  order: Order = null;
  customers: Customer[] = null;

  constructor(
    private ordsvc: OrderService,
    private custsvc: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.order.customerId = +this.order.customerId;
    this.order.customer = null;
    this.ordsvc.change(this.order).subscribe(
      res => {
        console.log("Order change successful");
        this.router.navigateByUrl("/orders/list");
      },
      err => {
        console.error(err);
      }
    );
  }
  ngOnInit(): void {
    this.custsvc.list().subscribe(
      res => this.customers = res as Customer[],
      err => console.error(err)
    );
    let id = this.route.snapshot.params.id;
    this.ordsvc.get(+id).subscribe(
      res => this.order = res as Order,
      err => console.error(err)
    );
  }

}
