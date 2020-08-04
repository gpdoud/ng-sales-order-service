import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Orderitem } from '../orderitem/orderitem.class';

const baseurl = "http://localhost:58750/api/orderitems";

@Injectable({
  providedIn: 'root'
})
export class OrderitemService {

  constructor(private http: HttpClient) { }

  list(): Observable<Orderitem[]> {
    return this.http.get(`${baseurl}`) as Observable<Orderitem[]>;
  }

  get(id: number): Observable<Orderitem> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Orderitem>;
  }

  create(orderitem: Orderitem): Observable<Orderitem> {
    return this.http.post(`${baseurl}`, orderitem) as Observable<Orderitem>;
  }

  change(orderitem: Orderitem): Observable<any> {
    return this.http.put(`${baseurl}/${orderitem.id}`, orderitem) as Observable<any>;
  }

  remove(id: number): Observable<Orderitem> {
    return this.http.delete(`${baseurl}/${id}`) as Observable<Orderitem>;
  }

}
