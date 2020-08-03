import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Customer } from './customer.class';

const baseurl = "http://localhost:58750/api/customers";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  list(): Observable<Customer[]> {
    return this.http.get(`${baseurl}`) as Observable<Customer[]>;
  }

  get(id: number): Observable<Customer> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Customer>;
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post(`${baseurl}`, customer) as Observable<Customer>;
  }

  change(customer: Customer): Observable<any> {
    return this.http.put(`${baseurl}/${customer.id}`, customer) as Observable<any>;
  }

  remove(id: number): Observable<Customer> {
    return this.http.delete(`${baseurl}/${id}`) as Observable<Customer>;
  }

}
