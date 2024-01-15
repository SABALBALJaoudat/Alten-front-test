import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'app/model/product.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts(): Promise<Product[]> {
    return this.http.get<{data: Product[]}>('../../assets/products.json').toPromise()
      .then(res => res.data);
  }
}
