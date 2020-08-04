import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Item } from '../item/item.class';

const baseurl = "http://localhost:58750/api/items";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  list(): Observable<Item[]> {
    return this.http.get(`${baseurl}`) as Observable<Item[]>;
  }

  get(id: number): Observable<Item> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Item>;
  }

  create(item: Item): Observable<Item> {
    return this.http.post(`${baseurl}`, item) as Observable<Item>;
  }

  change(item: Item): Observable<any> {
    return this.http.put(`${baseurl}/${item.id}`, item) as Observable<any>;
  }

  remove(id: number): Observable<Item> {
    return this.http.delete(`${baseurl}/${id}`) as Observable<Item>;
  }

}
