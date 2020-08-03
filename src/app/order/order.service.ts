import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Order } from '../order/order.class';

const baseurl = "http://localhost:58750/api/orders";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  list(): Observable<Order[]> {
    return this.http.get(`${baseurl}`) as Observable<Order[]>;
  }

  get(id: number): Observable<Order> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Order>;
  }

  create(order: Order): Observable<Order> {
    return this.http.post(`${baseurl}`, order) as Observable<Order>;
  }

  change(order: Order): Observable<any> {
    return this.http.put(`${baseurl}/${order.id}`, order) as Observable<any>;
  }

  remove(id: number): Observable<Order> {
    return this.http.delete(`${baseurl}/${id}`) as Observable<Order>;
  }
}
