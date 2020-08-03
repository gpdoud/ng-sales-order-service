import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order.class';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/customer/customer.class';
import { CustomerService } from 'src/app/customer/customer.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order: Order = null;
  customers: Customer[] = [];
  pageTitle: string = "Order Detail";
  showDelete: boolean = false;

  verify(): void { this.showDelete = !this.showDelete; }
  delete(): void {
    this.custsvc.remove(this.order.id).subscribe(
      res => {
        console.log("Delete Order successful");
        this.router.navigateByUrl("/orders/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordsvc: OrderService,
    private custsvc: CustomerService
  ) { }

  ngOnInit(): void {
    this.custsvc.list().subscribe(
      res => {
        this.customers = res as Customer[];
      },
      err => {
        console.error(err);
      }
    );
    let id = this.route.snapshot.params.id;
    this.ordsvc.get(+id).subscribe(
      res => {
        console.log("Order", res);
        this.order = res as Order;
      },
      err => {
        console.error(err);
      }
    );
  }

}
