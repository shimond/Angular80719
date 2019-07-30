import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private serverUrl = environment.apiUrl;
    private productsSubject = new BehaviorSubject<Product[]>([]);
    private currentProductsSubject = new BehaviorSubject<Product>(null);


    get allProducts$() {
        return this.productsSubject.asObservable();
    }

    get currentProduct$() {
        return this.currentProductsSubject.asObservable();
    }


    setCurrentProductById(id: number) {
        const url = this.serverUrl + '/products/' + id;
        this.http.get<Product>(url).subscribe(o => this.currentProductsSubject.next(o));
    }

    initAll() {
        const url = this.serverUrl + '/products';
        this.http.get<Product[]>(url).subscribe(res => this.productsSubject.next(res));
    }

    updateProduct(p: Product) {
        const url = this.serverUrl + '/products/' + p.id;
        return this.http.put<Product>(url, p).pipe(tap(() => this.initAll())).toPromise();
    }

    insertProduct(p: Product) {
        const url = this.serverUrl + '/products';
        return this.http.post<Product>(url, p).pipe(tap(() => this.initAll())).toPromise();
    }


    constructor(private http: HttpClient) {
        this.initAll();
    }
}
