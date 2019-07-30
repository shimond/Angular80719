import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-products-home',
    templateUrl: './products-home.component.html',
    styleUrls: ['./products-home.component.scss']
})
export class ProductsHomeComponent implements OnInit {

    products$: Observable<Product[]>;
    currentProduct$: Observable<Product>;
    constructor(private productsService: ProductsService, private router: Router) {

    }

    ngOnInit() {
        this.products$ = this.productsService.allProducts$;
        this.currentProduct$ = this.productsService.currentProduct$;
    }

    onSelectProductRequested(p: Product) {
        // this.productsService.setCurrentProductById(p.id);
        this.router.navigate(['edit', p.id]);
    }
}
