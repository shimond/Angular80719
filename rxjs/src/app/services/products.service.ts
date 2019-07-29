import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private products = new BehaviorSubject<Product[]>([]);

    get productsChanged$() {
        return this.products.asObservable();
    }

    InitProducts() {
        const url = 'http://localhost:3000/products';
        this.http.get<Product[]>(url).subscribe(res => {
            this.products.next(res);
        });
    }
    deleteProduct(id: number) {
        const url = 'http://localhost:3000/products/' + id;
        return this.http.delete(url).pipe(tap(() => this.InitProducts()));
    }

    constructor(private http: HttpClient) {
        this.InitProducts();
    }
}
