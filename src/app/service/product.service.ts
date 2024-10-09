import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private apiURL = "api/products";
  private reviewURL = "api/reviews";
  
  private http = inject(HttpClient)

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }

  getProductById(id: number): Observable<Product> {
    const productURL = this.apiURL + '/' + id;
    return this.http.get<Product>(productURL);
  }
}
