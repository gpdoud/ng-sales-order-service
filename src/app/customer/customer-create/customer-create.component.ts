import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.class';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  pageTitle: string = "Customer Create";
  customer: Customer = new Customer();

  constructor(
    private router: Router,
    private custsvc: CustomerService
  ) { }

  save(): void {
    this.custsvc.create(this.customer).subscribe(
      res => {
        console.log("Customer create successful!");
        this.router.navigateByUrl("/customers/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
  }

}
