import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.class';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  excludeState: string = "CA";
  sortCriteria: string = "name";
  sortAsc: boolean = true;
  searchCriteria: string = '';

  sort(column: string): void {
    if(column === this.sortCriteria) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortAsc = true;
    this.sortCriteria = column;
  }

  constructor(
    private custsvc: CustomerService
  ) { }

  ngOnInit(): void {
    this.custsvc.list().subscribe(
      res => {
        console.log(res);
        this.customers = res as Customer[];
      },
      err => {
        console.error(err);
      }
    );
  }

}
