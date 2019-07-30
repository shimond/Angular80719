import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'useForms';
    products$: Observable<Product[]>;
    currentProduct$: Observable<Product>;
    constructor(private productsService: ProductsService) {

    }

    ngOnInit() {
        this.products$ = this.productsService.allProducts$;
        this.currentProduct$ = this.productsService.currentProduct$;
    }

    onSelectProductRequested(p: Product) {
        this.productsService.setCurrentProductById(p.id);
    }
}
